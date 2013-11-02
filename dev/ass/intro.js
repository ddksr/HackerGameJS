/*
This is the introductionary assignment. It has simple
task for getting to know the terminal and the game.
*/
(function ($, hg) {
	hg.prepareGame([
		{
			id: "try",
			isFinished: function () {},
			set: function () {},
			unset: function () {},
			points: 10
		}
	], {
		startTime: 1000
	});

	$("#mail").popover("show");
})(jQuery, HackerGame);


