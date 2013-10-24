/**

HackerGame default javascript file

**/
HackerGame = {};
(function ($, hg) {
	var temp1,
		login = function(user, password, fn) {
			// TODO: do something
			fn(true);
		},
		init = function(settings) {
			var jObj = this;
			if (settings) {
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
			hg.refreshTranslations();
			hg.state = new hg.cons.State();


			hg.term = jObj.terminal(hg.exec, hg.config.terminal);		
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
			evt.preventDefault();
		};

	// Public methods
	hg.t = function (string) {
		return (hg.lang && hg.lang[string]) || string;
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
			if (!hg.config.assignments[assignment]) { return false; }
			hg.assignment = new hg.cons.Assignment(assignment, function () {
				hg.refreshTranslations(hg.config.assignmentScopeSelector);
			});
			return true;
		},
		language: function (lang) {
			hg.lang = lang;
		}
	};
	// Includer object
	hg.include = {
		assignment: function () {},
		computer: function () {},
		command: function() {}
	};

	// jQuery plugin
	$.fn.hackerGame = function (settings) {
		init.call(this);
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

	$(window).on('hashchange', hashChange);

	// Initialize HTML actions
	$.each(["tab", "input", "page"], function(i, segment) {
		var offset = 6 + segment.length;
		$("#" + segment + "-links").find("li").each(function () {
			var isSelected = $(this).is(".active"),
				id = $(this).attr("id").substr(offset);
			if (! isSelected) {
				$("#" + segment + "-" + id).hide();
			}
		});
	});

	hg.startGame = function () {
		$("#stash").empty();
	};
})(jQuery, HackerGame);
