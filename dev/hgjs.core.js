/*

HackerGame default javascript file

*/
HackerGame = {};
(function ($, hg) {
	// ===========================================
	// Internal objects and methods initialization
	// ===========================================
	var i18n, // language object
		/**
		 * core: initAssignment ()
		 * 
		 * Initialize loaded assignment. 
		 * Switch to Game page. 
		 */
		initAssignment = function () { // Prepare assignment
			console.log("core:initAssignment", []);

			$("#link-page-game").removeClass("disabled");
			hg.action.page("game");
			hg.action.tab("assignment");
		},
		/**
		 * core: startAssignment()
		 * 
		 * Start assignment (time couting, command line evalvation ...).
		 */
		startAssignment = function () { // Start workign on assignment
			console.log("core:startAssignment", []);
			hg.assignment.startCallback();
			hg.stats.refresh();
			hg.assignment.isRunning = true;
			hg.assignment.nextTask();
			hg.assignment.startTimer();
			hg.action.tab("task");
		},
		/**
		 * core: initDynamicFields ([selector])
		 * - selector : string - jQuery selector string
		 * 
		 * Go trough selector or body and replace dynamic fields with associated values.
		 */
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
		/**
		 * core: baseInit ([settings])
		 * - settings : object - settings objects to overwrite config
		 *
		 * This is the base initialization. It initializes the terminal
		 * and assignments. It has to be called right after the page loads and
		 * before any server scripts or similar are loaded.
		 */
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
		/**
		 * core: contentInit
		 * 
		 * Content initialization (translations evaluated and loading image removed).
		 * Note: has to be called after baseInit and after any server scripts are loaded.
		 */
		contentInit = function () {

			hg.refreshTranslations();

			hashChange(null);

			$("body").removeClass("loading");
		},
		/**
		 * core: hashChange (evt)
		 * - evt : object - event object
		 * 
		 * Event function which listens to hash changes.
		 */
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

	/**
	 * hg.term
	 *
	 * Terminal object
	 */
	hg.term = null;

	/**
	 * hg.tEcho (string)
	 * - text : string
	 * 
	 * Echo the text in the terminal.
	 * It also translates the text if possible.
	 */
	hg.tEcho = function () {};

	/**
	 * hg.tError (text)
	 * - text : string
	 * 
	 * Echo the text in the terminal as an error.
	 * It also translates the text if possible.
	 */
	hg.tError = function () {};


	/**
	 * hg.t (string)
	 * - string : string - translation key
	 *
	 * The 'string' gets translated if possible.
	 */
	hg.t = function (string) {
		console.log("t", [string]);
		return (i18n && i18n[string]) || string;
	};

	/**
	 * hg.refreshTranslations ([selector])
	 * - selector : string - jQuery selector string
	 * 
	 * Refresh body or selector translations.
	 */
	hg.refreshTranslations = function (selector) {
		console.log("refreshTranslations", [selector]);
		selector = selector ? (selector + " ") : "";
		$(selector + ".i18n").each(function () {
			var defaultString = $(this).attr("data-lang"),
				hasKey = i18n && i18n[defaultString],
				data = $(this).data("translation"),
				text = hg.t(defaultString);
			if ($(this).is(".text")) {
				// If the i18n element also has the text chass
				// is is asumed that the key would be very long
				// so short keys are also supported.
				// If the t() returns the same key, we know that the
				// Translation didn't happen so wi don't overwrite the text
				if (hasKey) {
					// We store the previous translation so that
					// translations can be switched but only the first time
					// when data is false
					if (hasKey && !data) { 
						$(this).data("translation", $(this).html());
					}
					$(this).html(text);
				}
				else if (data) {
					$(this).html(data);
				}
			}
			else { $(this).html(text); }
		});
	};

	/**
	 * hg.msg.alert (message, [title])
	 * - message : string
	 * - title : string - title string
	 *
	 * Display alert dialog with 'message' as message body and 'title'
	 * as dialog title. If no title is specified, 'Alert' will be used
	 */
	hg.msg.alert = function (message, title) {
		if (! title) { title = "Alert"; }
		$("#alertMessageTitle").text(hg.t(title));
		$("#alert .modal-body").text(hg.t(message));
		$("#alert").modal("show");
	};

	// Loader (assignments and languages)
	hg.load = {
		/**
		 * hg.load.assignment (tasks, other)
		 * - tasks : array - contains tasks objects
		 * - other : object - other important information
		 
		 * Object in 'tasks' array should contain:
		 * - evaluate : function - evaluation function
		 * - id : string - task id
		 * - set : function - callback before task is initialized
		 * - unset : function - callback after the task is completed
		 * - points : number - number of points this task can bring
		 *
		 * Object 'other' must contain:
		 * - startTime : number - number of seconds available for assignment, if 0 then unlimited
		 *
		 * Object 'other' can contain:
		 * - startMail : boolean - show email before assignment starts
		 * - successCallback : function - callback if assignment successfully completed
		 * - failCallback : function - callback if assignment fails
		 * - startCallback : function - callback after assignment is started (Start button)
		 * - initCallback : function - callback after assignment is initialized
		 * 
		 * Method loads the assignment into the game, prepares the tasks
		 * Resets the stats, etc.
		 *
		 * THIS SHOULD BE CALLED FROM ASSIGNMENT SCRIPTS
		 */
		assignment: function (tasks, other) {
			var msgBody, title, $heading, $instructions, $tasksHtml, $learnMore, $tryItOut;
			console.log("load.assignment", [tasks, other]);

			initDynamicFields();

			title = $("#stash").find("#ass-title").text();
			$heading = $(document.createElement("h2")).append(hg.t(title));
			msgBody = $("#stash").find("#ass-greeting").html();
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
			$("#tab-assignment .instructions").html($instructions).prepend($heading);
			$("#tab-task").html($(document.createElement("ol")).addClass("tasks-list"));
			$("#tab-learn-more").html($learnMore);
			$("#tab-try-it-out").html($tryItOut);

			$("#stash").empty();
			if (other.startMail) {
				hg.mail.recieve({
					subject: title,
					isSensei: true,
					body: msgBody,
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
		/**
		 * hg.load.externalFile (internalFilePath, externalFilePath)
		 * - internalFilePath : string - internal file path to new file
		 * - externalFilePath : string - external file path to file that will be loaded
		 *
		 * Load external file as text with AJAX into the filesystem as a text file.
		 */
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
		/**
		 * hg.load.language (languageId, languageObject)
		 * - languageId : string - language id
		 * - languageObject : object - contains translations in form english: translated
		 *
		 * Load language object to the game. Doesn't run hg.refreshTranslations()
		 */
		language: function (langId, langObj) {
			console.log("load.language", [langId, langObj]);
			if (typeof(langId) == "object") { langObj = landId; }
			else if (langObj) { hg.lang = langId; }
			i18n = $.extend(i18n, langObj);
		},
		/**
		 * hg.load.specialFile (path, content)
		 * - path : string - internal path to file
		 * - content : function (input) - function which takes one argument
		 *
		 * Method for loading special files. Special file is represented in
		 * filesystem as a binary object, but its logic ('conent') gets
		 * loaded into the dynamic fielsystem (DFS).
		 * 
		 * The content function must return an array in the form:
		 * [status, string]
		 * - status : boolean - if the input was correct
		 * - string : string - the return string
		 */
		specialFile: function (path, content) {
			console.log("load.specialFile", [path, content]);
			if (! $.isFunction(content)) { return null; }
			hg.util.setFile(path, null);
			hg.state.computer.dfs[path] = content;
		}
	};

	// Indicators
	/**
	 * hg.ind
	 *
	 * Indicator object. Cosits of global states and constants.
	 * - modal : boolean - is there a modal dialog displayed
	 * - NUM_OF_ASSIGNMENTS - number of assignments
	 */
	hg.ind = {
		modal: false,
		NUM_OF_ASSIGNMENTS: 0
	};

	// Mail system
	hg.mail = {
		message: undefined, // string message
		/**
		 * hg.mail.setNew ()
		 *
		 * Call to set the mail icon red.
		 */
		setNew: function() {
			console.log("mail.setNew", []);
			if (!$("#mail").is(".red-alert")) {
				$("#mail").addClass("red-alert");
			}
			$("#mail").hgBlink();
		},
		/**
		 * hg.mail.setEmpty ()
		 * 
		 * Call to set the mailbox icon as empty.
		 */
		setEmpty: function () {
			console.log("mail.setEmpty", []);
			$("#mail").removeClass("red-alert");
		},
		/**
		 * hg.mail.recieve (message, clickOpen)
		 * - message : object
		 * - clickOpen : function - callback when mail is opened
		 * 
		 * Object 'message' must contain:
		 * - body : string - message body
		 * Object 'message' can contain:
		 * - sender : string - sender name
		 * - isSensei : boolean - if true, message will be treated more importantly
		 * - button : object - object for mail button
		 *
		 * Object 'button' must contain:
		 * - name : string - button title
		 * - action : function - callback when button is clicked
		 */
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
		/**
		 * hg.mail.open ()
		 * 
		 * Message dialog box initialization after mail icon is clicked.
		 */
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
		/**
		 * hg.mail.close()
		 *
		 * Close message dialog.
		 */
		close: function () {
			console.log("mail.close", []);
			$("#mailMessage").modal("hide");
			hg.ind.modal = false;
		}
	};
	
	// ==============
	// jQuery plugins
	// ==============

	/**
	 * jQuery: .hackerGame([settings])
	 * - settings : object - object to overwrite configuration
	 * 
	 * Make DOM object into the game terminal
	 */
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
					state: hg.config.state
				}); 
			}
			contentInit.call($termObj);
		}
		return $termObj;
	};
	
	/**
	 * jQuery: .hackerGameEditor([settings])
	 *
	 * Make DOM object into game Editor. Settings are currently not used.
	 */
	$.fn.hackerGameEditor = function (settings) {
		var $edtObj = this, 
			filePath = null, 
			filename=null,
			editable = false,
			special = false;
		console.log("$.fn.hackerGameEditor", [settings]);

		/**
		 * hg.editor.enable ()
		 * 
		 * Enable Editor
		 */
		hg.editor.enable = function () {
			$($edtObj).attr("contentEditable", "true");
		};

		/**
		 * hg.editor.disable ()
		 * 
		 * Disable Editor
		 */
		hg.editor.disable = function () {
			$($edtObj).attr("contentEditable", "false");
		};

		
		/**
		 * hg.editor.getContent ()
		 * 
		 * Get Editor content
		 */
		hg.editor.getContent = function () {
			var content = $($edtObj).html().replace(/<br>/g, "\n");
			if (content.charAt(content.length - 1) == '\n') {
				content = content.substr(0, content.length - 1);
			}
			return content;
		};

		/**
		 * hg.editor.setContent ()
		 * - content : string - content to be set
		 * 
		 * Set editor content.
		 */
		hg.editor.setContent = function (content) {
			$($edtObj).html(content.replace(/\n/g, "<br>"));
		};

		/**
		 * hg.editor.focus ()
		 * 
		 * Focus Editor (switch to Editor tab)
		 */
		hg.editor.focus = function () {
			hg.action.input("editor");
		};

		/**
		 * hg.editor.blur ()
		 * 
		 * Blur Editor (switch to Terminal tab)
		 */
		hg.editor.blur = function () {
			hg.action.input("terminal");
		};

		/**
		 * hg.editor.watch (path, specialInput)
		 * - path : string - path to file to watch
		 * - specialInput : string - optional special input for special files
		 * 
		 * Watch text or special file in editor. If not special, the file
		 * get editable.
		 */
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

		/**
		 * hg.editor.unwatch ()
		 *
		 * Unwatch current file.
		 */
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

		/**
		 * hg.editor.save ()
		 *
		 * Save contents to watch file (this overwrites special fies !!!)
		 */
		hg.editor.save = function () { // FIXME: don't overwrite special files
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

	/**
	 * jQuery: .hackerGameTimer()
	 *
	 * Initialize hackergame timer.
	 */
	$.fn.hackerGameTimer = function() {
		var $obj = this,
			ms = 1000, // number of ms to trigger
			zeroTimeCallback, // callback when timer is finised 
			// Display timer (called everytime step is called)
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
			// Step called every second
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
			/**
			 * hg.timer.counter
			 *
			 * Integer field containing remaining number of seconds.
			 */
			counter: 0, 
			
			/**
			 * hg.timer.lastCounter
			 * 
			 * Stores the last counter value if timer was stopped before counter was zero.
			 */
			lastCounter: null,
			
			/**
			 * hg.timer.status
			 *
			 * Stores the timeout value.
			 */
			status: undefined,
			
			/**
			 * hg.timer.set (setCounter, ztCallback)
			 * - setCounter : integer - counter value
			 * - ztCakkbacj ; function - callback called when counter gets to 0
			 * 
			 * Initialize and set the timer.
			 */ 
			set: function (setCounter, ztCallback) {
				console.log("timer.set", [setCounter, ztCallback]);
				if ($obj.is(".red-alert")) {
					$obj.removeClass("red-alert");
				}
				this.counter = setCounter;
				
				zeroTimeCallback = ztCallback || function () {};
				display(setCounter === 0);
			},

			/**
			 * hg.timer.start
			 *
			 * Start counting.
			 */
			start: function () {
				console.log("timer.start", []);
				hg.timer.status = setTimeout(step, ms);
			},

			/**
			 * hg.timer.stop
			 *
			 * Stop counting. Stop callback doesn't get called.
			 */
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

