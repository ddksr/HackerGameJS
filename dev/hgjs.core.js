/**

HackerGame default javascript file

**/
HackerGame = {};
(function ($, hg) {
	// ===========================================
	// Internal objects and methods initialization
	// ===========================================
	var i18n, // language object
		login = function(user, password, fn) { // login function
			// TODO: do something
			fn(true);
		},
		initAssignment = function () { // Prepare assignment
			hg.mail.close();
			$("#link-page-game").removeClass("disabled");
			hg.action.page("game");
			hg.action.tab("assignment");
		},
		startAssignment = function () { // Start workign on assignment
			hg.assignment.isRunning = true;
			hg.assignment.nextTask();
			hg.assignment.startTimer();
			hg.action.tab("task");
		},
		initDynamicFields = function (selector) {
			$((selector || "body") + " .dyn").each(function () {
				var field, attr = $(this).attr("data-field");
				if (attr) {
					attr = attr.split(".");
					if (attr.length > 1) {
						field = hg.config;
						$.each(attr, function (_, elt) {
							field = field[elt] || {};
						});
					}
					if (field) {
						$(this).text(field);
					}
				}
			});
		},
		init = function(settings) {
			var $obj = this;

			// Initialize available task list
			$.each(hg.config.assignments, function (i, ass) {
				var $tr = $(document.createElement("tr")).addClass("ass-"+ass.id),
					$tdName = $(document.createElement("td")).addClass("ass-name"),
					$tdCurrent = $(document.createElement("td")).addClass("ass-current-score"),
					$tdBest = $(document.createElement("td")).addClass("ass-best-score"),
					$a = $(document.createElement("a"));
				$a.attr("href", "#/assignment/" + ass.id).text(hg.t(ass.name));
				$tdName.append($a);

				$tdCurrent.text("-");
				$tdBest.text(ass.bestScore || "-");
				
				$tr.append($tdName).append($tdCurrent).append($tdBest);

				$("table.assignment-list").append($tr);
			});

			hg.config = $.extend(hg.config, settings);

			if (hg.config.loginRequired) {
				hg.config.terminal.login = login;
			}
			hg.config.terminal.completion = hg.commandCompletion;
			hg.config.terminal.prompt = function (fn) {
				var comp = hg.state.computer,
					props = comp.properties,
					user = props.user,
					dir = (comp.pwd == "/" && "/") || null,
					hostname = props.hostname;
				if (!dir) {
					dir = comp.pwd;
					if (dir == ("/home/"+user)) {
						dir = "~";
					}
					else {
						dir = dir.split("/");
						dir = dir[dir.length-1];
					}
				}
				fn("[" + user + "@" + hostname + " " + dir + "]$ ");
			};

			$("#anon-sama").popover();

			hg.refreshTranslations();
			hg.state = new hg.cons.State();

			hg.term = $obj.terminal(hg.exec, hg.config.terminal);
			hashChange(null);

			$("body").removeClass("loading");

			return $obj;
		},
		hashChange = function (evt) { // event listener for hash changing
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


	// =========================
	// Containers initialization
	// =========================

	hg.cons = {}; // constructors
	hg.network = {}; // network methods
	hg.util = {}; // utility methods
	hg.action = {}; // action methods
	hg.include = {}; // includer object, called from assignments

	// ==============
	// Public methods
	// ==============

	// Translation methods
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

	// Loader (assignments and languages)
	hg.load = {
		assignment: function (tasks, other) {
			var title, body, $instructions, $tasksHtml, $learnMore, $tryItOut;
			initDynamicFields();

			title = $("#stash").find("#ass-title").text();
			body = $("#stash").find("#ass-greeting").html();
			$instructions = $("#stash").find("#ass-instructions").clone();
			$tasksHtml = $("#stash").find("#ass-tasks").clone();
			$learnMore = $("#stash").find("#ass-learn-more").clone();
			$tryItOut = $("#stash").find("#ass-try-it-out").clone();

			hg.assignment.numOfTasks = tasks.length;
			hg.assignment.startTime = other.startTime;
			hg.timer.set(other.startTime);
			$.each(tasks, function (i, task) {
				var html = $tasksHtml.find("." + task.id).html();
				hg.assignment.tasks[i] = new hg.cons.Task(task, html);
			});
			
			hg.assignment.successCallback = other.successCallback || function () {};
			hg.assignment.failCallback = other.failCallback || function () {};

			// Parse HTML
			$("#tab-assignment .instructions").html($instructions);
			$("#tab-task").html($(document.createElement("ol")).addClass("tasks-list"));
			$("#tab-learn-more").html($learnMore);
			$("#tab-try-it-out").html($tryItOut);

			hg.mail.recieve({
				subject: title,
				isSensei: true,
				body: body,
				button: {
					name: "Start",
					action: initAssignment
				}
			});
			$("#stash").empty();
		},
		language: function (langId, langObj) {
			if (typeof(langId) == "object") { langObj = landId; }
			else if (langObj) { hg.lang = langId; }
			i18n = $.extend(i18n, langObj);
		}
	};

	// Indicators
	hg.ind = {
		modal: false
	}

	// Mail system
	hg.mail = {
		message: undefined,
		setNew: function() {
			if (!$("#mail").is(".red-alert")) {
				$("#mail").addClass("red-alert");
			}
			$("#mail").hgBlink();
		},
		setEmpty: function () {
			$("#mail").removeClass("red-alert");
		},
		recieve: function (message, clickOpen) {
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
			if (hg.mail.message && ! hg.ind.modal) {
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
				hg.ind.modal = true;
			}
			$("#mail").popover("hide");
			hg.mail.setEmpty();
		},
		close: function () {
			$("#mailMessage").modal("hide");
		}
	};
	
	// ==============
	// jQuery plugins
	// ==============
	$.fn.hackerGame = function (settings) {
		var $obj = this;
		if (settings && settings.server) {
			// Define init script wrapper
			hg.initServer = function(fnAfterInit) {
				init.call($obj, settings);
				if ($.isFunction(fnAfterInit)) {
					fnAfterInit.call($obj); 
				}
			};
			// The server script needs to call hg.initServer();
			$.getScript(settings.server);
		}
		else {
			init.call($obj, settings);
		}
	};
	$.fn.hackerGameTimer = function() {
		var $obj = this,
			ms = 1000, // number of ms to trigger
			callbackFn,
			display = function() {
				minutes = Math.floor(hg.timer.counter/60);
				seconds = hg.timer.counter - minutes*60;
				minutes = (minutes < 10 ? "0" : "") + minutes;
				seconds = (seconds < 10 ? "0" : "") + seconds;
				if (hg.timer.counter <= 60 && !$obj.is(".red-alert")) {
					$obj.addClass("red-alert");
				}
				$obj.text(minutes + ":" + seconds);
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
			status: undefined,
			set: function (setCounter, callback) {
				if ($obj.is(".red-alert")) {
					$obj.removeClass("red-alert");
				}
				this.counter = setCounter;
				callbackFn = callback || function () {};
				display();
			},
			start: function () {
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

	// ==============
	// Event listenrs
	// ==============
	$(window).on('hashchange', hashChange);

	// ===================
	// HTML initialization
	// ===================

	$("body").addClass("loading");
	$("body").append($(document.createElement("div")).addClass("loading-gif").html("&nbsp;"));

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
	$("#mailMessage").on("hide.bs.modal", function () {
		hg.ind.modal = false;
	});
	
	$("#mail").popover({
		content: "You have mail! Click to continue",
		trigger: "manual",
		placement: "bottom"
	});
	$("#mail").click(function () {
		hg.mail.open();
	});
	$("#button-start-game").click(function () {
		$(this).hide();
		startAssignment();
	});
	
})(jQuery, HackerGame);




