(function ($, hg) {

	hg.load.specialFile("/tmp/test", function (i) { 
		return i == "aux" ? [true, "success"] : [false, "error"]; 
	});

	hg.load.externalFile("/tmp/test2", "ass/password/dbDump.txt");

	hg.load.assignment([
		
	], {
		startTime: 1200
	});

}).call(this, jQuery, HackerGame);
