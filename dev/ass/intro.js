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
				setTimeout(function () { $("#input-terminal").hgBlink(3); }, 1000);
			},
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
			points: 10
		},
		{
			id: "report-score",
			evaluate: function (input) {
				return parseInt(input.split(" ")[1], 10) == hg.stats.currentScore;
			},
			points: 10
		},
		{
			id: "pwd",
			evaluate: function (input) {
				var rgx = /^pwd$/;
				return rgx.test(input);
			},
			points: 5
		},
		{
			id: "tree",
			evaluate: function (input) {
				var rgx1 = /^tree$/, rgx2 = /^tree \/home\/?$/;
				if (!stash.tree) { stash.tree = {}; }
				if (rgx1.test(input)) { stash.tree.rgx1 = true; }
				if (rgx2.test(input)) { stash.tree.rgx2 = true; }
				return stash.tree.rgx1 && stash.tree.rgx2;
			},
			points: 25
		},
		{
			id: "finish",
			evaluate: function (input) {
				return input == "sensei help";
			},
			points: 10
		}
	], {
		startTime: 900,
		successCallback: lastTaskCompleted,
		startMail: true
	});
})(jQuery, HackerGame);


