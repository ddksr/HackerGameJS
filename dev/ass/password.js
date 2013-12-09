(function ($, hg) {

	hg.load.specialFile("/tmp/test", function (i) { 
		return i == "bla" ? [true, "success"] : [false, "error"]; 
	});

	hg.load.assignment([
		
	], {
		startTime: 1200
	});

}).call(this, jQuery, HackerGame);
