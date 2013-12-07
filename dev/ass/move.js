(function ($, hg) {
	var draw = function () {
		// Init canvas
		var w = 400, h = 400,
			paper = Raphael("canvas", w, h),
			root, tmp, home, bin, user, documents, movies, music;

		$("#canvas svg").css("display", "block").css("margin", "5px auto");

		root = paper.circle(w/2, 30, 15);
		root.attr("fill", "#f00");
		root.attr("stroke", "#fff");

		
	};

	hg.load.assignment([
		{
			id: "pwd",
			evaluate: function (input) { return input === "pwd"; },
			points: 10
		}
	], {
		startTime: 3,
		initCallback: draw
	});

	

})(jQuery, HackerGame);
