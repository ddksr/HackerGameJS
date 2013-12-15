/*
This is the introductionary assignment. It has simple
task for getting to know the terminal and the game.
*/
(function ($, hg) {
	var body = $("#stash #ass-misc #ass-intro-mail-completed").html(),
		lastTaskCompleted = function () {
			hg.mail.recieve({
				isSensei: true,
				body: body
			}, true); 
			$("#mail").popover("show");
		},	
		stash = {};
	
	hg.load.assignment([
		{
			id: "try",
			evaluate: function () { return true; },
			set: function () {
				setTimeout(function () { 

					$("#tab-task li:first").hgBlink(3); 
					
					setTimeout(function () { 

						$("#input-terminal").hgBlink(3); 
						
					}, 2500);
					
				}, 1500);
			},
			points: 10
		},
		{
			id: "echo",
			evaluate: function (obj) {
				var rgx = /hello.world/gi;
				return obj.command === "echo" && rgx.test(obj.argsString);
			},
			points: 10
		},
		{
			id: "sensei",
			evaluate: function (obj) {
				var rgxFin = /^sensei .+/gi,
					rgxHelp = /^help sensei/gi;
				if (rgxHelp.test(obj.input)) {
					stash.sensei = true;
				}
				return stash.sensei && rgxFin.test(obj.input);
			},
			points: 15
		},
		{
			id: "report-time",
			evaluate: function (obj) {
				return parseInt(obj.args[0], 10) == Math.floor(hg.timer.counter/60);
			},
			points: 10
		},
		{
			id: "report-score",
			evaluate: function (obj) {
				return parseInt(obj.args[0], 10) == hg.stats.currentScore;
			},
			points: 10
		},
		{
			id: "help-all",
			evaluate: function (obj) {
				return obj.input === "help";
			},
			points: 10
		},
		{
			id: "ls",
			evaluate: function (obj) {
				return obj.input === "ls";
			},
			points: 10
		},
		{
			id: "finish",
			evaluate: function (obj) {
				return obj.command == "sensei" && obj.argsString == "help";
			},
			points: 10
		}
	], {
		startTime: 900,
		successCallback: lastTaskCompleted,
		startMail: true
	});
})(jQuery, HackerGame);


