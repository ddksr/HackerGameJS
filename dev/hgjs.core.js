/**

HackerGame default javascript file

**/
HackerGame = {};
(function ($, hg) {
	var i18n, // language object
		login = function(user, password, fn) {
			// TODO: do something
			fn(true);
		},
		startAssignment = function () {
			hg.mail.close();
			$("#link-page-game").removeClass("disabled");
			hg.action.page("game");
			hg.action.tab("assignment");
		},
		startGame = function () {
			hg.assignment.isRunning = true;
			hg.assignment.nextTask();
			hg.stats.refresh();
			hg.assignment.startTimer();
			hg.action.tab("task");
		},
		init = function(settings) {
			var jObj = this;


			// Initialize available task list
			$.each(hg.config.assignments, function (i, ass) {
				var li = $(document.createElement("li")),
				a = $(document.createElement("a"));
				$(a).attr("href", "#/assignment/" + ass.id).text(hg.t(ass.name));
				li.append(a);
				$("ul.assignment-list").append(li);
			});

			if (settings) { //TODO: use extend
				$.each(settings, function (property, value) {
					hg.config[property] = value;
				});
			}
			if (hg.config.loginRequired) {
				hg.config.terminal.login = login;
			}
			hg.config.terminal.completion = hg.commandCompletion;
			hg.config.terminal.prompt = function (fn) {
				var comp = hg.state.computer,
					props = comp.properties,
					user = props.user,
					dir = comp.pwd,
					hostname = props.hostname;
				fn("[" + user + "@" + hostname + " " + dir + "]$ ");
			};

			$("#anon-sama").popover();

			hg.refreshTranslations();
			hg.state = new hg.cons.State();


			hg.term = jObj.terminal(hg.exec, hg.config.terminal);
			hashChange(null);

			return jObj;
		},
		hashChange = function (evt) {
			var hash = window.location.hash,
				segments = hash ? hash.split("/") : [],
				command, args;
			if (segments.length > 1) {
				command = segments[1];
				if (command && hg.action[command]) {
					args = segments.slice(2);
					args = args || [];
					hg.action[command].apply(this, args);
				}
			}
			if (evt) { evt.preventDefault(); }
		};

	// Public methods
	hg.t = function (string) {
		return (i18n && i18n[string]) || string;
	};
	hg.refreshTranslations = function (selector) {
		selector = selector ? (selector + " ") : "";
		$(selector + ".i18n").each(function () {
			var defaultString = $(this).attr("data-lang");
			$(this).text(hg.t(defaultString));
		});
	};

	// Init internal objects
	hg.cons = {}; // constructors
	hg.network = {}; // network methods
	hg.util = {}; // utility methods
	hg.action = {}; // action methods

	// Loader object
	hg.load = {
		assignment: function (assignment) {
			var status = false;
			$.each(hg.config.assignments, function (i, obj) {
				if (obj.id == assignment) { status = true; }
			});
			if (!status) { return false; }
			hg.assignment = new hg.cons.Assignment(assignment, function () {
				hg.refreshTranslations(hg.config.assignmentScopeSelector);
			});
			return true;
		},
		language: function (langId, langObj) {
			i18n = langObj;
			hg.lang = langId;
		}
	};
	
	// Includer object
	hg.include = {
		computer: function () {},
		command: function() {}
	};

	// jQuery plugin
	$.fn.hackerGame = function (settings) {
		var jObj = this;
		if (hg.config.server) {
			// Define init script wrapper
			hg.initServer = function(fn) {
				init.call(jObj, settings);
				if (fn && typeof(fn) == "function") {
					fn.call(jObj); 
				}
			};
			// The server script needs to call hg.initServer();
			$.getScript(hg.config.server);
		}
		else {
			init.call(jObj, settings);
		}
	};
	$.fn.hackerGameTimer = function() {
		var jObj = this,
			ms = 1000, // number of ms to trigger
			callbackFn,
			display = function() {
				minutes = Math.floor(hg.timer.counter/60);
				seconds = hg.timer.counter - minutes*60;
				minutes = (minutes < 10 ? "0" : "") + minutes;
				seconds = (seconds < 10 ? "0" : "") + seconds;
				if (hg.timer.counter <= 60 && !$(jObj).is(".red-alert")) {
					$(jObj).addClass("red-alert");
				}
				$(jObj).text(minutes + ":" + seconds);
			},
			step = function () {
				var minutes, seconds;
				hg.timer.counter -= 1;
				display();
				if (isNaN(hg.timer.counter) || hg.timer.counter <= 0) { return; }
				hg.timer.status = setTimeout(step, ms);
			};
		hg.timer = {
			counter: 0,
			obj: jObj,
			status: undefined, 
			start: function (setCounter, callback) {
				if ($(jObj).is(".red-alert")) {
					$(jObj).removeClass("red-alert");
				}
				this.counter = setCounter;
				callbackFn = callback || function() {};
				display();
				hg.timer.status = setTimeout(step, ms);
			},
			stop: function () {
				counter = 0;
				if (this.status) { clearTimeout(this.status); }
				callbackFn();
			}
		};
		return this;
	};

	hg.mail = {
		message: undefined,
		setNew: function() {
			if (!$("#mail").is(".red-alert")) {
				$("#mail").addClass("red-alert");
			}
		},
		setEmpty: function () {
			$("#mail").removeClass("red-alert");
			hg.mail.message = undefined;
		},
		recieve: function (message) {
			hg.mail.message = {
				sender: message.isSensei ? "sensei" : (message.sender || "anon"),
				isSensei: message.isSensei,
				body: message.body,
				button: message.button || null
			};
			hg.mail.setNew();
		},
		open: function () {
			var img, button, title;
			if (hg.mail.message) {
				img = hg.mail.message.isSensei ? "anon-small" : "any";
				img = hg.config.basePath + hg.config.imagesPath + img + ".png";
				title = "Message from <strong>" + hg.mail.message.sender + "</strong>";
				$("#mailIcon").attr("src", img).css({
					display: "block",
					margin: "5px auto 0px auto"
				});
				$("#mailMessage .body").html(hg.mail.message.body);
				$("#mailMessage .modal-title").html(title);
				$("#mailMessage").modal("show");
				if (hg.mail.message.button) {
					$("#mailButton").text(hg.mail.message.button.name)
						.click(hg.mail.message.button.action).show();
				}
				else {
					$("#mailButton").hide();
				}
			}
			$("#mail").popover("hide");
			hg.mail.setEmpty();
		},
		close: function () {
			$("#mailMessage").modal("hide");
		}
	};

	hg.prepareGame = function (tasks, other) {
		var title = $("#stash").find("#ass-title").text(),
			body = $("#stash").find("#ass-greeting").text(),
			instructions = $("#stash").find("#ass-instructions").clone(),
			tasksHtml = $("#stash").find("#ass-tasks").clone(),
			learnMore = $("#stash").find("#ass-learn-more").clone(),
			tryItOut = $("#stash").find("#ass-try-it-out").clone();

		hg.assignment.numOfTasks = tasks.length;
		hg.assignment.startTime = other.startTime;
		$.each(tasks, function (i, task) {
			var html = $(tasksHtml).find("." + task.id).html();
			hg.assignment.tasks[i] = new hg.cons.Task(task, html);
		});
		
		// Parse HTML
		$("#tab-assignment .instructions").html(instructions);
		$("#tab-task").html($(document.createElement("ul")).addClass("tasks-list"));
		$("#tab-learn-more").html(learnMore);
		$("#tab-try-it-out").html(tryItOut);

		hg.mail.recieve({
			subject: title,
			isSensei: true,
			body: body,
			button: {
				name: "Start",
				action: startAssignment
			}
		});
		$("#stash").empty();
	};
	
	$(window).on('hashchange', hashChange);

	// Initialize HTML actions
	$.each(["tab", "input", "page"], function(i, segment) {
		var offset = 6 + segment.length;
		$("#" + segment + "-links").find("li").each(function () {
			if (! $(this).attr("id")) { return; }
			var isSelected = $(this).is(".active"),
				id = $(this).attr("id").substr(offset);
			if (! isSelected) {
				$("#" + segment + "-" + id).hide();
			}
		});
	});
	$("#mailMessage").modal();
	$("#mail").popover({
		content: "You have mail! Click to continue",
		trigger: "manual",
		placement: "bottom"
	});
	$("#button-start-game").click(function () {
		$(this).hide();
		startGame();
	});
	
})(jQuery, HackerGame);




