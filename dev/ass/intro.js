/*
This is the introductionary assignment. It has simple
task for getting to know the terminal and the game.
*/
(function ($, hg) {
	var lastTaskCompleted = function () {
		hg.mail.recieve({
			isSensei: true,
			body: $("#stash #ass-misc #mail-completed")
		});
	};
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
		}
	], {
		startTime: 300,
		successCallback: lastTaskCompleted
	});

	$("#mail").popover("show");
})(jQuery, HackerGame);


