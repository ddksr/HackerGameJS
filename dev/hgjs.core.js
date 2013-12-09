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

			$("#link-page-game").removeClass("disabled");
			hg.action.page("game");
			hg.action.tab("assignment");
		},
		startAssignment = function () { // Start workign on assignment
			console.log("core:startAssignment", []);
			hg.assignment.startCallback();
			hg.stats.refresh();
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
			var $obj = this,
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

			hg.config.terminal.completion = hg.commandCompletion;
			hg.config.terminal.prompt = function (fn) {
				var comp = hg.state.computer,
					props = comp.properties,
					user = props.user,
					dir = (comp.pwd == "/" && "/") || null,
					hostname = (comp.fs.etc && comp.fs.etc.hostname) || props.hostname;
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
				fn("[" + user + "@" + hostname.split("\n")[0] + " " + dir + "]$ ");
			};

			$("#anon-sama").popover();

			// This is where it has to be. There is an error alerted in FF if
			// This is moved one command lower. 
			hg.state = new hg.cons.State();

			hg.term = $obj.terminal(hg.exec, hg.config.terminal);
			
			hg.tEcho = function (text) {
				hg.term.echo(tOut(text));
			};
			hg.tError = function (text) {
				hg.term.error(tOut(text));
			};
			
			// Initialize available task list
			$.each(hg.config.assignments, function (i, ass) {
				var assNum = 0,
					$tr = $(document.createElement("tr")),
					$tdName = $(document.createElement("td")),
					$tdCurrent = $(document.createElement("td")).addClass("ass-current-score"),
					$tdBest = $(document.createElement("td")).addClass("ass-best-score"),
					$tdTrials = $(document.createElement("td")).addClass("ass-trials"),
					$a = $(document.createElement("a"));
				
				if (ass && typeof(ass) == "object") {
					$tr.addClass("assignment")
						.addClass("ass-" + ass.id)
						.attr("data-id", ass.id);

					$a.attr("href", "#/assignment/" + ass.id).text(hg.t(ass.name));
					$tdName.addClass("ass-name").append(" - ").append($a);
					
					$tdCurrent.text("-");
					$tdBest.text("-");
					$tdTrials.text("0");

					hg.ind.NUM_OF_ASSIGNMENTS += 1;
					$tr.append($tdName).append($tdCurrent).append($tdBest).append($tdTrials);

				}
				else {
					$tdName.text(hg.t(ass))
						.addClass("assignment-separator")
						.attr("colspan", 4);
					$tr.append($tdName);
				}
				$("table.assignment-list").append($tr);
				
			});
			return $obj;
		},
		contentInit = function () {

			hg.refreshTranslations();

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
	hg.cli = {}; // CLI methods
	hg.network = {}; // network methods
	hg.util = {}; // utility methods
	hg.action = {}; // action methods
	hg.include = {}; // includer object, called from assignments
	hg.dump = {}; // packer object
	hg.editor = {}; // editor methods
	hg.load = {}; // load methods
	hg.ind = {}; // indicators module
	hg.stats = {}; // stats module
	hg.msg = {}; // mesages

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

	hg.msg.alert = function (message, title) {
		if (! title) { title = "Alert"; }
		$("#alertMessageTitle").text(hg.t(title));
		$("#alert .modal-body").text(hg.t(message));
		$("#alert").modal("show");
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
			
			hg.timer.set(other.startTime, function () {
				hg.assignment.fail();
			});
			

			hg.stats.bestScore = $(".assignment-list .ass-" + hg.assignment.id + " .ass-trials").text();
			hg.stats.currentScore = 0;
			hg.stats.refresh();

			$.each(tasks, function (i, task) {
				var html = $tasksHtml.find("." + task.id).html();
				hg.assignment.tasks[i] = new hg.cons.Task(task, html);
			});
			
			hg.assignment.successCallback = other.successCallback || function () {};
			hg.assignment.failCallback = other.failCallback || function () {};
			hg.assignment.startCallback = other.startCallback || function () {};
			hg.assignment.initCallback = other.initCallback || function () {};

			// Parse HTML
			$("#tab-assignment .instructions").html($instructions);
			$("#tab-task").html($(document.createElement("ol")).addClass("tasks-list"));
			$("#tab-learn-more").html($learnMore);
			$("#tab-try-it-out").html($tryItOut);

			$("#stash").empty();
			if (other.startMail) {
				hg.mail.recieve({
					subject: title,
					isSensei: true,
					body: body,
					button: {
						name: "Start",
						action: function () { 
							hg.mail.close();
							initAssignment();
							hg.assignment.initCallback();
						}
					}
				});
				$("#mail").popover("show");
			}
			else {
				initAssignment();
				hg.assignment.initCallback();
			}
		},
		externalFile: function (internalFilePath, externalFilePath) {
			console.log("core.externalFile", [internalFilePath, externalFilePath]);
			$.ajax({
				url: externalFilePath,
				async: false,
				dataType: "text",
				success: function (content) {
					hg.util.setFile(internalFilePath, content);
				},
				error: function (a,b) {
					console.log("core.externalFile AJAX ERROR", [a,b]);
				}
			});
		},
		language: function (langId, langObj) {
			console.log("load.language", [landId, langObj]);
			if (typeof(langId) == "object") { langObj = landId; }
			else if (langObj) { hg.lang = langId; }
			i18n = $.extend(i18n, langObj);
		},
		specialFile: function (path, content) {
			console.log("load.specialFile", [path, content]);
			if (! $.isFunction(content)) { return null; }
			hg.util.setFile(path, null);
			hg.state.computer.dfs[path] = content;
		}
	};

	// Indicators
	hg.ind = {
		modal: false,
		NUM_OF_ASSIGNMENTS: 0
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
				title = hg.t("Message from <strong>" + hg.mail.message.sender + "</strong>");
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
		var $edtObj = this, 
			filePath = null, 
			filename=null,
			editable = false,
			special = false;
		console.log("$.fn.hackerGameEditor", [settings]);

		hg.editor.enable = function () {
			$($edtObj).attr("contentEditable", "true");
		};
		hg.editor.disable = function () {
			$($edtObj).attr("contentEditable", "false");
		};
		hg.editor.getContent = function () {
			var content = $($edtObj).html().replace(/<br>/g, "\n");
			if (content.charAt(content.length - 1) == '\n') {
				content = content.substr(0, content.length - 1);
			}
			return content;
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
		hg.editor.watch = function (path, specialInput) { // TODO: rewrite, now you can!
			var fileData,
				specialMeta = null;
			editable = true;
			if (hg.util.fileExists(path)) {
				fileData = hg.util.getFile(path);
				if (fileData[3] == "b" && specialInput) {
					specialMeta = hg.util.getSpecialFile(fileData[0] + fileData[1])(specialInput);
					if (specialMeta !== null) {
						if (specialMeta[0]) {
							fileData[2] = specialMeta[1];
							editable = false;
						}
						else {
							return specialMeta[1];
						}
					}
					else {
						return "File is not a text file.";
					}
				}
				else if (fileData[3] != "t") {
					return "File is not a text file.";
				}
			}
			else {
				// create file
				fileData = hg.util.setFile(path, "");
				if (fileData) {
					fileData = hg.util.getFile(path);
				}
				else { return "Path doesn't exist."; }
			}
			hg.editor.setContent(fileData[2]);
			filePath = fileData[0];
			filename = fileData[1];
			
			$("#button-save-editor").attr("disabled", !editable);
			$("#button-close-editor").attr("disabled", false);
			if (editable) { hg.editor.enable(); }

			return false;
		};
		hg.editor.unwatch = function () {
			$("#button-save-editor, #button-close-editor").attr("disabled", true);
			if ($.isFunction(hg.editor.closeCallback)) {
				hg.editor.closeCallback();
			}
			filePath = null;
			hg.editor.setContent("");
			hg.editor.disable();
			
			hg.editor.openCallback = null;
			hg.editor.closeCallback = null;
		};
		hg.editor.save = function () {
			var message = hg.t("File") + " " + filePath + filename + " " + hg.t("saved") + ".";
			console.log("Saving file ... ");
			if (! editable) {
				console.log("Not editable");
				return;
			}
			
			hg.util.setFile((filePath + filename), hg.editor.getContent());
			

			hg.state.computer.hasChanged = true;
			$("#editor-message").hide().text(message).fadeIn("slow", function () {
				setTimeout(function () {
					$("#editor-message").fadeOut("slow").text("");
				}, 2000);
			});
			console.log("File saved");
		};
		$("#button-save-editor").click(function () {
			hg.editor.save();
			$(this).blur();
		});
		$("#button-close-editor").click(function () {
			console.log("Closing file ... ");
			$(this).blur();
			hg.editor.unwatch();
			
			hg.editor.blur();
			console.log("Editor closed.");
		});
		return $edtObj;
	};
	$.fn.hackerGameTimer = function() {
		var $obj = this,
			ms = 1000, // number of ms to trigger
			callbackFn,
			zeroTimeCallback,
			display = function(noCounting) {
				minutes = Math.floor(hg.timer.counter/60);
				seconds = hg.timer.counter - minutes*60;
				minutes = (minutes < 10 ? "0" : "") + minutes;
				seconds = (seconds < 10 ? "0" : "") + seconds;
				if (!noCounting && hg.timer.counter <= 60 && !$obj.is(".red-alert")) {
					$obj.addClass("red-alert");
				}
				if (!noCounting) { 
					$obj.text(minutes + ":" + seconds); 
				}
				else {
					$obj.text("--:--");
				}
			},
			step = function () {
				var minutes, seconds;
				hg.timer.counter -= 1;
				display();
				if (isNaN(hg.timer.counter) || hg.timer.counter <= 0) { 
					zeroTimeCallback();
					return; 
				}
				hg.timer.status = setTimeout(step, ms);
			};
		console.log("$.fn.hackerGameTimer", []);
		hg.timer = {
			counter: 0,
			lastCounter: null,
			status: undefined,
			set: function (setCounter, ztCallback) {
				console.log("timer.set", [setCounter, ztCallback]);
				if ($obj.is(".red-alert")) {
					$obj.removeClass("red-alert");
				}
				this.counter = setCounter;
				
				zeroTimeCallback = ztCallback || function () {};
				display(setCounter === 0);
			},
			start: function () {
				console.log("timer.start", []);
				hg.timer.status = setTimeout(step, ms);
			},
			stop: function () {
				console.log("timer.stop", []);
				this.lastCounter = this.counter;
				this.counter = 0;
				if (this.status) { clearTimeout(this.status); }
			}
		};
		return this;
	};

	// ===================
	// HTML initialization
	// ===================

	$("body").addClass("loading");
	$("body").append($(document.createElement("div")).addClass("loading-gif").html("&nbsp;"));


	$("#alert").modal();

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

