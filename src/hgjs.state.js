/*

HackerGame

*/
(function ($, hg) {
	var stateCache = [], 
		/**
		 * state: timeToScore ()
		 *
		 * Return: integer
		 *
		 * Convert remaining time to score.
		 */
		timeToScore = function () {
			return parseInt(hg.timer.lastCounter / 20, 10);
		},
	
		/**
		 * state: evalAssignmentQueue ()
		 *
		 * Evaluate assignment queue. Calculate bonuses etc.
		 */
		evalAssignmentQueue = function () {
			console.log("state:evalAssignmentQueue", []);
			var task = this,
				actions = {
				hint: function () {
					hg.stats.increment("currentScore", - parseInt(0.75 * task.points, 10));
				},
				bonus: function () {
					hg.stats.increment("currentScore", parseInt(0.25 * task.points, 10));
				}
			};
			if (hg.assignment.queue.length > 0) {
				$.each(hg.assignment.queue, function (i, elt) {
					if (actions[elt]) { actions[elt](); }
				});
				hg.assignment.queue = [];
			}
		},
	
		/**
		 * state: closeTask ()
		 *
		 * Close current task.
		 */
		closeTask = function (id) {
			console.log("state:closeTask", [id]);
			$("#tab-task .tasks-list #task-"+id).addClass("completed-task");
			$("#tab-task .tasks-list #task-"+id).find(".hint, .help").popover('destroy').empty().remove();
		},

		/**
		 * state: loadAssignment (assId, [callback])
		 * - **assId** *string* - assignment id
		 * - **callback** *function* - callback called when script file is loaded
		 *
		 * Load assignment HTML and JavaScript. First HTML is loaded into #stash div element.
		 * Then the JS is loaded and evaluated (it can use its HTML elements 
		 * directly from #stash. Callback is called if script is successfully loaded.
		 */
		loadAssignment = function (assId, callback) {
			var path = hg.config.basePath + hg.config.assignmentsPath + assId + "/",
				htmlUrl = path + assId + ".html",
				htmlLangUrl = path + assId + "-" + hg.lang + ".html",
				jsUrl = path + assId + ".js",
				loadJS = function (html) {
					$("#stash").html(html);
					$.getScript(jsUrl, callback);
				};
			console.log("state:loadAssignment", [assId, callback]);
			$.ajax({
				url: htmlLangUrl,
				method: 'get',
				dataType: 'html',
				success: loadJS,
				error: function() {
					// If no language markup file exists, load the default (English) file
					$.ajax({
						url: htmlUrl,
						method: 'get',
						dataType: 'html',
						success: loadJS
					});
				}
			});
		};
	/**
	 * hg.cons.State (computer, [config, [innerState]])
	 * - **computer** *object* - computer object
	 * - **config** *object* - configuration for the state
	 * - **innerState** *object* - NOT USED YET
	 * 
	 * Constructor for State object.
	 * 
	 * Object fields:
	 * - **computer** *object* - computer object
	 * - **place** *object* - directory object for current working directory
	 * 
	 * Object methods:
	 * - hasCompletedAssignments ()
	 * - getDefaultComputer () 
	 * - changeDir (directory)
	 * - makeDir (directory)
	 * - removeFile (filePath)
	 * - openFile (filePath)
	 * - saveFile (filePath, content)
	 * - emptyTmp ()
	 * - copy (src, dst)
	 * - move (src, dst)
	 */
	hg.cons.State = function State(computer, config, innerState) {
		console.log("new State", [computer, config, innerState]);
		this.computer = computer || new hg.cons.Computer(hg.config.defaultComputer, true);
		
		this.innerState = innerState;
		if (_.isObject(config)) {
			$.each(config, function (property, value) {
				this[property] = value;
			});
		}

		this.place = this.computer.fs;
	};
	hg.cons.State.prototype.hasCompletedAssignment = function (assId) {
		console.log("State.hasCompletedAssignment", [assId]);
		var bestScore, $elt = $("table.assignment-list .ass-"+assId);
		if ($elt.length > 0) {
			bestScore = $elt.find(".ass-best-score").text();
			if (bestScore && bestScore != "-") {
				return parseInt(bestScore, 10);
			}
		}
		return 0;		
	};
	hg.cons.State.prototype.getDefaultComputer = function () {
		console.log("State.getDefaultComputer", []);
		return this.computer.isDefault ? 
			this.computer : (this.innerState ? 
							 this.innerState.getDefaultComputer() : null);
	};
	hg.cons.State.prototype.changeDir = function (fold) {
		var res;
		console.log("State.changeDir", [fold]);
		if (fold.charAt(0) != "/") {
			fold = hg.util.absPath(fold);
		}
		if (hg.util.isDir(fold)) {
			hg.util.pathIterator(fold, function (place) {
				hg.state.place = place;
			});
			hg.state.computer.pwd = hg.util.cleanPath(fold);
			if (hg.state.computer.pwd.length == 0) {
				hg.state.computer.pwd = "/";
			}
			res = true;
		}
		else { res = false; }
		return res;
	};
	hg.cons.State.prototype.makeDir = function (fold) {
		var err = false;
		console.log("State.makeDir", [fold]);
		if (typeof(fold) != "string") { err = "Path not valid!"; }
		else {
			var exists = hg.util.getFile(fold);
			if (hg.util.fileExists(fold)) {
				err = "File already exists!";
			}
			if (!err) {
				err = hg.util.setFile(fold, {});
				if (! err) { err = "Path doesn't exist!"; }
				else { err = false; }
			}
		}
		return err;
	};
	hg.cons.State.prototype.removeFile = function (filePath) {
		var path, er = false, place = this.computer.fs;
		console.log("State.removeFile", [filePath]);
		if (typeof(filePath) != "string") { er = "Path not valid!"; }
		else {
			path = filePath;
			if (path.charAt(0) != "/") { path = hg.util.absPath(path); }

			path = hg.util.cleanPath(path);

			path = path.split("/").slice(1);
			$.each(path, function (i, elt) {
				if (i >= path.length - 1) {
					if (place[elt] !== undefined) {
						delete place[elt];
						hg.state.computer.hasChanged = true;
						if (! hg.util.fileExists(hg.state.computer.pwd)) {
							hg.state.changeDir("/");
						}
					}
					else {
						er = "Directory already exists!";
					}
				}
				else if (place[elt] === undefined) {
					er = "Path doesn't exist!";
				}
				else if (place[elt] !== null && typeof(place[elt]) == "object") {
					place = place[elt];
				}
				else {
					er = "Path doesn't exist!";
					return -1;
				}
			});
		}
		return er;

	};
	hg.cons.State.prototype.openFile = function (path) {
		var file = hg.util.getFile(path);
		console.log("State.openFile", [path]);
		if (file) {
			return file[3];
		}
		return false;
	};
	hg.cons.State.prototype.saveFile = function (path, content) {
		console.log("State.saveFile", [path, content]);
		return hg.util.setFile(path, content);
	};
	
	hg.cons.State.prototype.emptyTmp = function () {
		hg.util.setFile("/tmp", {});
	};

	hg.cons.State.prototype.copy = function (src, dst, move) {
		var from = hg.util.getFile(src), to;
		console.log("State.copy", [src, dst, move]);
		if (! from) { return false; }
		if (move && !hg.util.checkFilePermission(src, true)) {
			return null;
		}
		if (hg.util.isDir(dst)) {
			to = hg.util.getFile(dst);
			if (to) {
				if (move || from[2] === null || typeof(from[2]) != "object") {
					to[2][from[1]] = from[2];
				}
				else {
					// Deep copy
					to[2][from[1]] = jQuery.extend(true, {}, from[2]);
				}
			}
			else {
				return false;
			}
		}
		else {
			if (move || from[2] === null || typeof(from[2]) != "object") {
				hg.util.setFile(dst, from[2]);
			}
			else {
				// Deep copy
				hg.util.setFile(dst,jQuery.extend(true, {}, from[2])); 
			}
		}
		if (move) {
			hg.state.removeFile(src);
		}

		hg.state.computer.hasChanged = true;
		if (! hg.util.fileExists(hg.state.computer.pwd)) {
			// If something happens to PWD, go to root
			hg.state.changeDir("/");
		}
		return true;
	};

	hg.cons.State.prototype.move = function (src, dst) {
		console.log("State.move", [src, dst]);
		return hg.state.copy(src, dst, true);
	};

	/**
	 * hg.cons.Task (taskObj, taskHtml)
	 * - **taskObj** *object* - task configurations
	 * - **taskHtml** *string* - task html from #stash
	 *
	 * Object taskObj:
	 * - **evaluate** *function* - callback when user uses a command
	 * - **set** *function* - callback when task is initialized
	 * - **unset** *function* - callback when task is destroyed
	 * - **points** *number* - points user can achieve with this task
	 * - **bonus** *function* - add a callback to check if bonus should be added
	 *
	 * Constructor for Task object.
	 *
	 * Object fields:
	 * - **id** *string*
	 * - **evaluate** *function*
	 * - **set** *function*
	 * - **unset** *function*
	 * - **pointes** *function*
	 * 
	 * Object methods:
	 * - switchTask (previousTask) - switch between tasks
	 */
	hg.cons.Task = function Task(taskObj) {
		console.log("new Task", [taskObj]);
		this.id = taskObj.id || null;
		this.evaluate = taskObj.evaluate || function () { return true; };
		this.set = taskObj.set || function () {};
		this.unset = taskObj.unset || function () {};
		this.points = taskObj.points;

		hg.assignment.maxTaskPoints += this.points;

	};
	hg.cons.Task.prototype.switchTask = function (previousTask) {
		var scrollPos = 0;
		console.log("Task.switchTask", [previousTask]);
		if (previousTask) { 
			$("#task-" + previousTask.id).addClass("past-task");
			previousTask.unset(); 
		}
		
		this.set();

		$("#task-" + this.id).removeClass("future-task");


		hg.assignment.evaluate = this.evaluate;
	};

	/**
	 * hg.cons.Assignment (assId, loadCallback)
	 * - **assId** *assignment* - id
	 *
	 * Constructor for Assignment object.
	 * Note: this gets called before assignment is initialized.
	 * Constructor also calls loadAssignment ()
	 *
	 * Object fields:
	 * - **id** *string* - assignment id
	 * - **currentTask** *integer* - pointer to current task
	 * - **numOfTasks** *integer* - number of tasks
	 * - **tasks** *array* - container for Task objects
	 * - **isRunning** *boolean* - true when assignment is initialized and started (running)
	 * - **startTime** *integer* - starting counter for timer
	 * - **evaluate** *function* - evaluate function for every assignment
	 * - **queue** *array* - assignment actions queue
	 * - **maxTaskPoints** *integer* - maximum number of points tasks can bring
	 * - **bestScore** *integer* - best assignment score
	 *
	 * Object methods:
	 * - startTimer () - start hg.timer
	 * - nextTask () - switch to next task
	 * - fail () - called when assignment fails
	 * - complete () - called when all tasks are completed
	 */
	hg.cons.Assignment = function Assignment(assignment, loadCallback) {
		
		console.log("new Assignment", [assignment, loadCallback]);
		this.id = assignment;
		this.currentTask = -1;
		this.numOfTasks = 0; // set with array length
		this.tasks = []; // array of task objects 
		this.isRunning = false;
		this.startTime = 0;
		this.evaluate = function () { return true; };
		this.queue = [];

		this.maxTaskPoints = 0;
		this.bestScore = hg.state.hasCompletedAssignment(assignment);
		
		hg.stats.currentScore = 0;
		hg.stats.completedTasks = 0;


		loadAssignment(assignment, loadCallback);
	};
	hg.cons.Assignment.prototype.startTimer = function () {
		console.log("Assignment.startTimer", []);
		if (this.startTime) { hg.timer.start(); }
	};
	hg.cons.Assignment.prototype.nextTask = function () {
		var nextTask,
			prevTask = this.currentTask >= 0 ? this.tasks[this.currentTask] : undefined;
		console.log("Assignment.nextTask", []);
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
		console.log("Assignment.fail", []);
		var $trials = $(".assignment-list .ass-" + this.id + " .ass-trials"),
			trialsNum = parseInt($trials.text(), 10) || 0;
		hg.timer.stop();
		
		hg.stats.currentScore = 0;
		hg.stats.refresh();

		stateCache.push({
			"type": "assignment",
			"key": this.id,
			"value": -1
		});
		hg.assignment.failCallback();

		$trials.text(trialsNum + 1);
		hg.action.page("assignments");
		

		hg.msg.alert("Sorry, you failed. Your time is up. But try again! Failing is an important part of learing. ", "Time's up! You got cought!");

		hg.assignment = null;
	};
	hg.cons.Assignment.prototype.complete = function () {
		var $tr = $(".assignment-list .ass-"+hg.assignment.id),
			bestScore = $tr.find(".ass-best-score").text(),
			trials = $tr.find(".ass-trials").text(),
			msg = "";
		console.log("Assignment.complete", []);
		hg.timer.stop();

		if (this.bestScore == 0) {
			hg.stats.increment({
				completedAssignments: 1
			});
		}

		$tr.find(".ass-name a").addClass("completed-assignment");

		hg.stats.increment({
			currentScore: timeToScore()
		});

		if (bestScore == "-" || (parseInt(bestScore, 10) < hg.stats.currentScore)) {
			bestScore = hg.stats.currentScore;
		}
		trials = parseInt(trials, 10) || 0;

		$tr.find("td.ass-best-score").text(bestScore);
		$tr.find("td.ass-current-score").text(hg.stats.currentScore);
		$tr.find("td.ass-trials").text(trials);

		hg.stats.aggregate();


		stateCache.push({
			"type": "assignment",
			"key": this.id,
			"value": hg.stats.currentScore
		});

		msg = hg.t("You have successfully completed the assignment.") + ".<br />"
			+ hg.t("Your current score is") + ": " + hg.stats.currentScore + ".<br />"
			+ hg.t("Your best score is") + ": " + bestScore + ".<br />";
		
		hg.msg.alert(msg, "Assignment completed!");



		hg.assignment.successCallback();
		hg.action.page("assignments");
		hg.assignment = null;
	};

	hg.stats = {
		/**
		 * hg.stats.refresh ()
		 * 
		 * Function refreshes the stats values in DOM.
		 */
		refresh: function (exclude) {
			var overallAssignments = hg.ind.NUM_OF_ASSIGNMENTS,
				tasksInAssignment = hg.assignment ? hg.assignment.tasks.length : 0;
			console.log("stats.refresh", [exclude]);

			$("#stats-completed-tasks").text(hg.stats.completedTasks + "/" + tasksInAssignment);
			$("#stats-completed-assignments").text(hg.stats.completedAssignments + "/" + overallAssignments);
			$("#stats-current-score").text(hg.stats.currentScore);
			$("#stats-best-score").text(hg.stats.bestScore);
			$("#stats-overall-score").text(hg.stats.overallScore);
		},
		/**
		 * hg.stats.aggregate ([hold])
		 * - **hold** *boolean* - if true, don't automatically refresh stats
		 *
		 * Aggregates overall score.
		 */
		aggregate: function (hold) {
			$(".table.assignment-list tr").each(function (i, elt) {
				var best = $(elt).find(".ass-best-score").text();
				if (best && best != "-") { best = parseInt(best, 10); }
				else { best = 0; }
				hg.stats.overallScore += best;
			} );
			if (! hold) { hg.stats.refresh(); }
		},
		
		/**
		 * hg.stats.increment (stat, val, [hold])
		 * - **stat** *string* - stat to be incremented
		 * - **val** *integer* - increment stat by value
		 * - **hold** *boolean* - if true, don't refresh stats after changes
		 *
		 * Increment stats.
		 */
		increment: function (stat, val, hold) {
			console.log("stats.increment", [stat, val, hold]);
			if (typeof(stat) == "object") {
				$.each(stat, function (key, inc) {
					if (hg.stats[key] !== undefined && !$.isFunction(hg.stats[key])) {
						hg.stats[key] += (parseInt(inc, 10) || parseFloat(inc, 10)) ? inc : 0;
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
	/**
	 * hg.action
	 *
	 * Special module with functions that get triggered by location hashes.
	 * Spec: #/actionMethod/actionArgument -> hg.action.actionMethod (actionArgument)
	 * Example: #/page/help -> hg.action.page (help)
	 */

	/**
	 * hg.action.page (pageId)
	 * - **pageId** *string* - page id to switch to
	 * 
	 * Switch page
	 */
	hg.action.page = function (pageId) {
		var prevPageIdRaw = $("#page-links .active").attr("id"),
			prevPageId = prevPageIdRaw && prevPageIdRaw.substr(10),
			pageDisabled = $("#link-page-" + pageId+".disabled").length > 0,
			showPage = function () {
				$("#link-page-" + pageId).addClass("active"); 
				$("#page-" + pageId).fadeIn("slow");
			};
		
		console.log("action.page", [pageId]);
		if (pageDisabled) { return; }
		if (prevPageId) { 
			$("#link-page-" + prevPageId).removeClass("active"); 
			$("#page-" + prevPageId).fadeOut('fast', showPage);
		}
		else {
			showPage();
		}
	};

	/**
	 * hg.action.input (inputId)
	 * - **inputId** *string* - input tab to change to
	 *
	 * Change input tab.
	 */
	hg.action.input = function (inputId) {
		var prevInputId = $("#input-links .active").attr("id").substring(11),
			showInput = function () {
				$("#link-input-" + inputId).addClass("active"); 
				$("#input-" + inputId).show(0);
			};
		console.log("action.input", [inputId]);
		if (prevInputId) {
			$("#link-input-" + prevInputId).removeClass("active"); 
			$("#input-" + prevInputId).hide(0, showInput);
		}
		else {
			showInput();
		}
	};

	/**
	 * hg.action.tab (tabId)
	 * - **tabId** *string* - info tab to change to
	 * 
	 * Change info tab.
	 */
	hg.action.tab = function (tabId) {
		var prevTabId = $("#tab-links .active").attr("id").substring(9),
			showTab = function () {
				$("#link-tab-" + tabId).addClass("active"); 
				$("#tab-" + tabId).show(0);
			};
		console.log("action.tab", [tabId]);
		if (prevTabId) {
			$("#link-tab-" + prevTabId).removeClass("active"); 
			$("#tab-" + prevTabId).hide(0, showTab);
		}
		else {
			showTab();
		}
	};

	/**
	 * hg.action.assignment (assId)
	 * - **assId** *string* - selected assignment
	 * 
	 * Select assignment.
	 */
	hg.action.assignment = function (assId) {
		var status = false;
		console.log("action.assignment", [assId]);

		if (hg.assignment) { return; }

		status = _.contains(_.pluck(hg.config.assignments, 'id'), assId);
		if (! status) { return; }

		hg.assignment = new hg.cons.Assignment(assId, function () {
			console.log("new Assignment:callback", []);
			hg.refreshTranslations(hg.config.assignmentScopeSelector);
		});

		$("#link-tab-game").removeClass("disabled");
	};

	/**
	 * hg.action.mail ()
	 * 
	 * Open email.
	 */
	hg.action.mail = function (cmnd) {
		console.log("action.mail", [cmnd]);
		if (cmnd == "open") { hg.mail.open(); }
	};

	/**
	 * hg.dump.state ()
	 * 
	 * Return: array
	 *
	 * Dump state to JSON. 
	 * Return format: [stateJson, callback]
	 * Object stateJson can be null if no state changes exist.
	 * Callback resets the changes back to previous state. Everything
	 * That has happend between one dump and one callback call is also
	 * appended to the state. 
	 */
	hg.dump.state = function () {
		var tmpCache = stateCache;
		console.log("pack.state", []);
		stateCache = []; // clear cache
		return [tmpCache.length > 0 ? tmpCache : null, function () {
			// Note: If connection error
			// The current assignments cache needs to be
			// reverted back. Also, changes that were made
			// before the packing need to be saved.
			tmpCache.push.apply(tmpCache, stateCache);
			stateCache = tmpCache;
		}];
	};
})(jQuery, HackerGame);
