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
		},	
		stash = {};
	
	hg.load.assignment([
		{
			id: "try",
			evaluate: function () { return true; },
			points: 10
		},
		{
			id: "echo",
			evaluate: function (input) {
				var rgx = /echo hello.world/gi;
				return rgx.test(input);
			},
			points: 10
		},
		{
			id: "sensei",
			evaluate: function (input) {
				var rgxFin = /^sensei \w+/gi,
					rgxHelp = /^help sensei/gi;
				if (rgxHelp.test(input)) {
					stash.sensei = true;
				}
				return stash.sensei && rgxFin.test(input);
			},
			points: 15
		},
		{
			id: "report-time",
			evaluate: function (input) {
				return parseInt(input.split(" ")[1], 10) == Math.floor(hg.timer.counter/60);
			},
			points: 5
		},
		{
			id: "report-score",
			evaluate: function (input) {
				return parseInt(input.split(" ")[1], 10) == hg.stats.currentScore;
			},
			points: 5
		}
	], {
		startTime: 900,
		successCallback: lastTaskCompleted
	});

	$("#mail").popover("show");
})(jQuery, HackerGame);


