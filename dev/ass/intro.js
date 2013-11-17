/*
This is the introductionary assignment. It has simple
task for getting to know the terminal and the game.
*/
(function ($, hg) {
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
		}
	], {
		startTime: 300
	});

	$("#mail").popover("show");
})(jQuery, HackerGame);


