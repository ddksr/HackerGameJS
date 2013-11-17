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
		}
	], {
		startTime: 300,
		successCallback: lastTaskCompleted
	});

	$("#mail").popover("show");
})(jQuery, HackerGame);


