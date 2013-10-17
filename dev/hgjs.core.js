/**

HackerGame default javascript file

**/
if (!window.HackerGame) { HackerGame = {}; }
(function ($, hg) {
	var temp1,
		init = function(settings) {
			var jObj = this.terminal(function(command, term) {
				if (command !== '') {
					try {
						var result = window.eval(command);
						if (result !== undefined) {
							term.echo(new String(result));
						}
					} catch(e) {
						term.error(new String(result));
            		}
				}
			}, {
				greetings: 'Welcome!',
				name: 'hacker-terminal',
				height: 400,
				prompt: '$ '
			});
			hg.refreshTranslations();
			if (hg.timer) { hg.timer.start(10); }
			return jObj;
		};
	// Public methods
	hg.loadLanguage = function(lang) {
		hg.lang = lang;
	};
	hg.refreshTranslations = function () {
		$(".i18n").each(function () {
			var defaultString = $(this).attr("data-lang");
			$(this).text((hg.lang && hg.lang[defaultString]) || defaultString);
		});
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
				$(hg.timer.obj).text(minutes + ":" + seconds);
				
			},
			step = function () {
				var minutes, seconds;
				hg.timer.counter -= 1;
				display();
				if (isNaN(hg.timer.counter) || hg.timer.counter <= 0) { return; }
				hg.timer.status = setTimeout(step, ms);
			};
		hg.timer = {
			"counter": 0,
			"obj": jObj,
			"status": undefined, 
			"start": function (setCounter, callback) {
				this.counter = setCounter;
				callbackFn = callback || function() {};
				display();
				hg.timer.status = setTimeout(step, ms);
			},
			"stop": function () {
				counter = 0;
				if (this.status) { clearTimeout(this.status); }
				this.timer.callback();
			}
		};
		return this;
	};
})(jQuery, HackerGame); 
