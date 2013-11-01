/**

HackerGame

**/
(function ($, hg) {
	var temp, 
		loadAssignment = function (assId, callback) {
			var htmlUrl = hg.config.basePath + hg.config.assignmentsPath + assId + ".html",
				jsUrl = hg.config.basePath + hg.config.assignmentsPath + assId + ".js";
			$.ajax({
				url: htmlUrl,
				method: 'get',
				dataType: 'html',
				success: function (html) {
					$("#stash").html(html);
					$.getScript(jsUrl, callback);
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
	hg.cons.Task = function Task(taskObj) {
		this.id = taskObj.id || null; 
		this.isFinished = taskObj.isFinished || function () { return true; };
		this.set = taskObj.set || function () {};
		this.unset = taskObj.unset || function () {};
	};
	hg.cons.Task.prototype.switchTask = function (previousTask) {
		if (previousTask) { previousTask.unset(); }
		this.set();
		hg.callback = this.isFinished;
	};
	hg.cons.Assignment = function Assignment(assignment, loadCallback) {
		this.currentTask = -1;
		this.numOfTasks = 0; // set with array length
		this.tasks = []; // array of task objects // TODO: load
		this.isRunning = false;
		loadAssignment(assignment, loadCallback);
	};
	hg.cons.Assignment.prototype.startTimer = function () {
		hg.timer.start(this.startTime);
	};
	hg.cons.Assignment.prototype.nextTask = function () {
		var nextTask,
			prevTask = this.currentTask > 0 ? this.tasks[currentTask] : undefined;
		if (this.currentTask < this.numOfTasks) {
			prevTask = this.tasks[this.currentTask + 1];
			nextTask.switchTask(prevTask);
			this.currentTask += 1;
			return true;
		}
		return false;
	};
	hg.cons.Assignment.prototype.fail = function () {
		hg.timer.stop();
	};
	hg.cons.Assignment.prototype.complete = function () {
		hg.timer.stop();
	};
	hg.stats = {
		completedAssignments: 0,
		completedTasks: 0,
		completedTasksOverall: 0
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
		var status = hg.load.assignment(assId);
		if (status) {
			$("#link-tab-game").removeClass("disabled");
		}
	};
	hg.action.mail = function (cmnd) {
		if (cmnd == "open") { hg.mail.open(); }
	};
})(jQuery, HackerGame);

