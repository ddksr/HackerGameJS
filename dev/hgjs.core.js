/**

HackerGame default javascript file

**/
HackerGame = {};
(function ($, hg) {
	// ===========================================
	// Internal objects and methods initialization
	// ===========================================
	var i18n, // language object
		initAssignment = function () { // Prepare assignment
			console.log("core:initAssignment", []);
			hg.mail.close();
			$("#link-page-game").removeClass("disabled");
			hg.action.page("game");
			hg.action.tab("assignment");
		},
		startAssignment = function () { // Start workign on assignment
			console.log("core:startAssignment", []);
			hg.assignment.isRunning = true;
			hg.assignment.nextTask();
			hg.assignment.startTimer();
			hg.action.tab("task");
		},
		initDynamicFields = function (selector) {
			console.log("core:initDynamicFields", [selector]);
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
		baseInit = function(settings) {
			var overallScore = 0, $obj = this,
				tOut = function (text) {
					console.log("core:init:tOut", [text]);
					var out = "";
					if (! $.isArray(text)) {
						text = [text];
					}
					$.each(text, function (_, str) {
						out += hg.t(text);
					});
					return out;
				};
			console.log("core:init", [settings]);
			hg.config = $.extend(hg.config, settings);

			
			hg.state = new hg.cons.State();
			hg.config.terminal.completion = hg.commandCompletion;
			hg.config.terminal.prompt = function (fn) {
				var comp = hg.state.computer,
					props = comp.properties,
					user = props.user,
					dir = (comp.pwd == "/" && "/") || null,
					hostname = props.hostname;
				console.log("terminal.prompt", []);
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

			
			hg.term = $obj.terminal(hg.exec, hg.config.terminal);
			
			hg.tEcho = function (text) {
				hg.term.echo(tOut(text));
			};
			hg.tError = function (text) {
				hg.term.error(tOut(text));
			};
			
			// Initialize available task list
			$.each(hg.config.assignments, function (i, ass) {
				var $tr = $(document.createElement("tr")).addClass("ass-"+ass.id),
					$tdName = $(document.createElement("td")).addClass("ass-name"),
					$tdCurrent = $(document.createElement("td")).addClass("ass-current-score"),
					$tdBest = $(document.createElement("td")).addClass("ass-best-score"),
					$tdTrials = $(document.createElement("td")).addClass("ass-trials"),
					$a = $(document.createElement("a"));
				$a.attr("href", "#/assignment/" + ass.id).text(hg.t(ass.name));
				$tdName.append($a);

				$tdCurrent.text("-");
				$tdBest.text("-");
				$tdTrials.text("0");


				$tr.append($tdName).append($tdCurrent).append($tdBest).append($tdTrials);

				$("table.assignment-list").append($tr);
			});

			hg.stats.overallScore = overallScore;

			return $obj;
		},
		contentInit = function () {

			hg.refreshTranslations();
			hg.state = new hg.cons.State();

			hashChange(null);

			$("body").removeClass("loading");
		},
		hashChange = function (evt) { // event listener for hash changing
			var hash = window.location.hash,
				segments = hash ? hash.split("/") : [],
				command, args;
			console.log("core:hashChange", [evt]);
			if (evt) { evt.preventDefault(); }
			if (segments.length > 1) {
				command = segments[1];
				if (command && hg.action[command]) {
					args = segments.slice(2);
					args = args || [];
					hg.action[command].apply(this, args);
				}
				window.location.hash = "";
			}
			
		};


	// =========================
	// Containers initialization
	// =========================

	hg.cons = {}; // constructors
	hg.network = {}; // network methods
	hg.util = {}; // utility methods
	hg.action = {}; // action methods
	hg.include = {}; // includer object, called from assignments
	hg.pack = {}; // packer object
	hg.editor = {}; // editor methods

	// ==============
	// Public methods
	// ==============

	// Terminal methods
	hg.term = null;
	hg.tEcho = function () {};
	hg.tError = function () {};

	// Translation methods
	hg.t = function (string) {
		console.log("t", [string]);
		return (i18n && i18n[string]) || string;
	};

	hg.refreshTranslations = function (selector) {
		console.log("refreshTranslations", [selector]);
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
			console.log("load.assignment", [tasks, other]);
			initDynamicFields();

			title = $("#stash").find("#ass-title").text();
			body = $("#stash").find("#ass-greeting").html();
			$instructions = $("#stash").find("#ass-instructions").clone();
			$tasksHtml = $("#stash").find("#ass-tasks").clone();
			$learnMore = $("#stash").find("#ass-learn-more").clone();
			$tryItOut = $("#stash").find("#ass-try-it-out").clone();

			// Init stats
			hg.assignment.numOfTasks = tasks.length;
			hg.assignment.startTime = other.startTime;
			hg.timer.set(other.startTime);
			hg.stats.bestScore = $(".assignment-list .ass-" + hg.assignment.id + " .ass-trials").text();
			hg.stats.currentScore = 0;
			hg.stats.refresh();

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
			console.log("load.language", [landId, langObj]);
			if (typeof(langId) == "object") { langObj = landId; }
			else if (langObj) { hg.lang = langId; }
			i18n = $.extend(i18n, langObj);
		}
	};

	// Indicators
	hg.ind = {
		modal: false
	};

	// Mail system
	hg.mail = {
		message: undefined,
		setNew: function() {
			console.log("mail.setNew", []);
			if (!$("#mail").is(".red-alert")) {
				$("#mail").addClass("red-alert");
			}
			$("#mail").hgBlink();
		},
		setEmpty: function () {
			console.log("mail.setEmpty", []);
			$("#mail").removeClass("red-alert");
		},
		recieve: function (message, clickOpen) {
			console.log("mail.recieve", [message, clickOpen]);
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
			console.log("mail.open", []);
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
				$("#mailMessage").modal("show").on("hide.bs.modal", function () {
					hg.ind.modal = false;
				});
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
			console.log("mail.close", []);
			$("#mailMessage").modal("hide");
			hg.ind.modal = false;
		}
	};
	
	// ==============
	// jQuery plugins
	// ==============
	$.fn.hackerGame = function (settings) {
		var $termObj = this;
		console.log("$.fn.hackerGame", [settings]);
		baseInit.call($termObj, settings);
		if (settings && settings.server) {
			hg.initServer = function () {
				contentInit.call($termObj);
			};
			$.getScript(settings.server);
		}
		else {
			// Load saved state from CONFIG
			if (hg.config.state) { 
				hg.load.state({
					state: hg.config.state,
				}); 
			}
			contentInit.call($termObj);
		}
		return $termObj;
	};
	$.fn.hackerGameEditor = function (settings) {
		var $edtObj = this, filePath = null;
		console.log("$.fn.hackerGameEditor", [settings]);

		hg.editor.enable = function () {
			$($edtObj).attr("contentEditable", "true");
		};
		hg.editor.disable = function () {
			$($edtObj).attr("contentEditable", "false");
		};
		hg.editor.getContent = function () {
			return $($edtObj).html().replace(/<br>/g, "\n");
		};
		hg.editor.setContent = function (content) {
			$($edtObj).html(content.replace(/\n/g, "<br>"));
		};
		hg.editor.focus = function () {
			hg.action.input("editor");
		};
		hg.editor.blur = function () {
			hg.action.input("terminal");
		};
		hg.editor.watch = function (path) {
			filePath = path;
			// TODO: open file
			hg.editor.enable();
		};
		hg.editor.unwatch = function () {
			filePath = null;
			hg.editor.disable();
		};
		$(edtObj).find(".btn").click(function () {
			if (filePath) {
				// TODO: save file
			}
		});
		return $editObj;
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
		console.log("$.fn.hackerGameTimer", []);
		hg.timer = {
			counter: 0,
			status: undefined,
			set: function (setCounter, callback) {
				console.log("timer.set", [setCounter, callback]);
				if ($obj.is(".red-alert")) {
					$obj.removeClass("red-alert");
				}
				this.counter = setCounter;
				callbackFn = callback || function () {};
				display();
			},
			start: function () {
				console.log("timer.start", []);
				hg.timer.status = setTimeout(step, ms);
			},
			stop: function () {
				console.log("timer.stop", []);
				counter = 0;
				if (this.status) { clearTimeout(this.status); }
				callbackFn();
			}
		};
		return this;
	};

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
	$("#mailMessage").modal().on("hide.bs.modal", function () {
		hg.ind.modal = false;
	});
	
	$("#mail").popover({
		content: hg.t("You have mail! Click to continue"),
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
	
	// ==============
	// Event listenrs
	// ==============
	$(window).on('hashchange', hashChange);
	
})(jQuery, HackerGame);




