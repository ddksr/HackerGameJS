/**

HackerGame

**/
(function ($, hg) {
	var temp, 
		initTaskHTML = function ($task) {
			var $help, $hint, 
				$btn = $(document.createElement("button")).addClass("btn").addClass("btn-info").addClass("btn-sm");
			$("#tab-task .tasks-list").append($task.append($(document.createElement("br"))));

			$help = $task.find(".help").clone();
			$hint = $task.find(".hint").clone();
			
			if ($help.length > 0) {
				$task.find(".help").replaceWith($btn.addClass("help").text("Help").clone().popover({
					content: $help.html(),
					title: hg.t("Help"),
					placement: "top",
					html: true
				}));
			}
			if ($hint.length > 0) {
				$task.find(".hint").replaceWith($btn.addClass("hint").text("Hint").clone().popover({
					content: $help.html(),
					title: hg.t("Hint"),
					placement: "bottom",
					html: true
				}).on('shown.bs.popover', function () {
					hg.assignment.queue.push("hint");
				}));
			}
			$task.hide().fadeIn("slow", function () {
				$("#tab-task").scrollTop($("#tab-task").get(0).scrollHeight);
			});
		},
		evalAssignmentQueue = function () {
			var task = this,
				actions = {
				hint: function () {
					hg.stats.increment("currentScore", - parseInt(0.75 * task.points, 10));
				}
			};
			if (hg.assignment.queue.length > 0) {
				$.each(hg.assignment.queue, function (i, elt) {
					if (actions[elt]) { actions[elt](); }
				});
				hg.assignment.queue = [];
			}
		},
		closeTask = function (id) {
			$("#tab-task .tasks-list #task-"+id).addClass("completed-task");
			$("#tab-task .tasks-list #task-"+id).find(".hint, .help").popover('destroy').empty().remove();
		},
		loadAssignment = function (assId, callback) {
			var htmlUrl = hg.config.basePath + hg.config.assignmentsPath + assId + ".html",
				htmlLangUrl = hg.config.basePath + hg.config.assignmentsPath + assId + "-" + hg.lang + ".html",
				loadJS = function (html) {
					$("#stash").html(html);
					$.getScript(jsUrl, callback);
				},
				jsUrl = hg.config.basePath + hg.config.assignmentsPath + assId + ".js";
			$.ajax({
				url: htmlLangUrl,
				method: 'get',
				dataType: 'html',
				success: loadJS,
				error: function() {
					// If no language markup file exists, load the default (english) file
					$.ajax({
						url: htmlUrl,
						method: 'get',
						dataType: 'html',
						success: loadJS
					});
				}
			});
		};
	hg.cons.State = function State(computer, config) {
		this.computer = computer || new hg.cons.Computer(hg.config.defaultComputer);
		this.innerState = undefined;
		if (config && typeof config === "object") {
			$.each(config, function (property, value) {
				this[property] = value;
			});
		}
	};
	hg.cons.Task = function Task(taskObj, taskHtml) {
		this.id = taskObj.id || null;
		this.evaluate = taskObj.evaluate || function () { return true; };
		this.set = taskObj.set || function () {};
		this.unset = taskObj.unset || function () {};
		this.points = taskObj.points;
		this.html = taskHtml || "";
	};
	hg.cons.Task.prototype.switchTask = function (previousTask) {
		var $li = $(document.createElement("li")).attr("id", "task-" + this.id);
		if (previousTask) { 
			previousTask.unset(); 
		}
		this.set();
		$li.html(this.html);
		initTaskHTML($li);
		hg.assignment.evaluate = this.evaluate;
	};
	hg.cons.Assignment = function Assignment(assignment, loadCallback) {
		this.id = assignment;
		this.currentTask = -1;
		this.numOfTasks = 0; // set with array length
		this.tasks = []; // array of task objects 
		this.isRunning = false;
		this.startTime = 0;
		this.evaluate = function () { return true; };
		this.queue = [];
		loadAssignment(assignment, loadCallback);
	};
	hg.cons.Assignment.prototype.startTimer = function () {
		hg.timer.start();
	};
	hg.cons.Assignment.prototype.nextTask = function () {
		var nextTask,
			prevTask = this.currentTask >= 0 ? this.tasks[this.currentTask] : undefined;
		
		nextTask = this.tasks[this.currentTask + 1];
		this.currentTask += 1;

		

		if (nextTask) { 
			nextTask.switchTask(prevTask);
		}

		if (prevTask) { 
			closeTask(prevTask.id);
			hg.stats.increment({
				currentScore: prevTask.points,
				completedTasks: 1
			});
			evalAssignmentQueue.call(prevTask); 
		}
		
		if (! nextTask) { hg.assignment.complete(); }
	};
	hg.cons.Assignment.prototype.fail = function () {
		hg.timer.stop();
		hg.assignment.failCallback();
	};
	hg.cons.Assignment.prototype.complete = function () {
		var $tr = $(".assignment-list .ass-"+hg.assignment.id),
			bestScore = $tr.find(".ass-best-score").text();
		hg.timer.stop();
		hg.stats.increment({
			completedAssignments: 1,
			overallScore: hg.stats.currentScore
		});
		hg.stats.refresh();
		$tr.find(".ass-name a").addClass("completed-assignment").attr("href", "#");
		
		if (bestScore == "-" || (parseInt(bestScore, 10) < hg.stats.currentScore)) {
			bestScore = hg.stats.currentScore;
		}
		$tr.find("td.ass-best-score").text(bestScore);
		$tr.find("td.ass-current-score").text(hg.stats.currentScore);
		hg.assignment.successCallback();
	};
	hg.stats = {
		refresh: function() {
			var overallAssignments = hg.config.assignments.length,
				tasksInAssignment = hg.assignment.tasks.length;

			$("#stats-completed-tasks").text(hg.stats.completedTasks + "/" + tasksInAssignment);
			$("#stats-completed-assignments").text(hg.stats.completedAssignments + "/" + overallAssignments);
			$("#stats-current-score").text(hg.stats.currentScore);
			$("#stats-best-score").text(hg.stats.bestScore);
			$("#stats-overall-score").text(hg.stats.overallScore);
		},
		increment: function(stat, val, hold) {
			if (typeof(stat) == "object") {
				$.each(stat, function (key, inc) {
					if (hg.stats[key] !== undefined && !$.isFunction(hg.stats[key])) {
						hg.stats[key] += inc;
					}
				});
			}
			else if (hg.stats[stat] !== undefined && !$.isFunction(hg.stats[stat])) { 
				hg.stats[stat] += val; 
			}
			if (! hold) { hg.stats.refresh(); }
		},
		completedAssignments: 0,
		completedTasks: 0,
		bestScore: 0,
		currentScore: 0,
		overallScore: 0
	};

	// Actions (which user can do)
	hg.action.page = function (pageId) {
		var prevPageId = $("#page-links .active").attr("id").substr(10),
			pageDisabled = $("#link-page-" + pageId).is(".disabled"),
			showPage = function () {
				$("#link-page-" + pageId).addClass("active"); 
				$("#page-" + pageId).show("slow");
			};
		if (pageDisabled) { return; }
		if (prevPageId) { 
			$("#link-page-" + prevPageId).removeClass("active"); 
			$("#page-" + prevPageId).hide("slow", showPage);
		}
		else {
			showPage();
		}
	};
	hg.action.input = function (inputId) {
		var prevInputId = $("#input-links .active").attr("id").substring(11),
			showInput = function () {
				$("#link-input-" + inputId).addClass("active"); 
				$("#input-" + inputId).show(0);
			};
		if (prevInputId) {
			$("#link-input-" + prevInputId).removeClass("active"); 
			$("#input-" + prevInputId).hide(0, showInput);
		}
		else {
			showInput();
		}
	};
	hg.action.tab = function (tabId) {
		var prevTabId = $("#tab-links .active").attr("id").substring(9),
			showTab = function () {
				$("#link-tab-" + tabId).addClass("active"); 
				$("#tab-" + tabId).show(0);
			};
		if (prevTabId) {
			$("#link-tab-" + prevTabId).removeClass("active"); 
			$("#tab-" + prevTabId).hide(0, showTab);
		}
		else {
			showTab();
		}
	};
	hg.action.assignment = function (assId) {
		var status = false;
		$.each(hg.config.assignments, function (i, obj) {
			if (obj.id == assId) { status = true; }
		});

		if (! status) { return; }

		hg.assignment = new hg.cons.Assignment(assId, function () {
			hg.refreshTranslations(hg.config.assignmentScopeSelector);
		});

		$("#link-tab-game").removeClass("disabled");
	};
	hg.action.mail = function (cmnd) {
		if (cmnd == "open") { hg.mail.open(); }
	};
})(jQuery, HackerGame);

