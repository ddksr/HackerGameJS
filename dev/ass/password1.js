(function ($, hg) {


	hg.state.makeDir("/tmp/passwords");
	hg.load.specialFile("/tmp/passwords/file1", function (i) { 
		return i == "123" ? [true, "6873"] : [false, "Incorrect password"]; 
	});

	hg.load.specialFile("/tmp/passwords/file2", function (i) { 
		return i == "ax" ? [true, "0992"] : [false, "Incorrect password"]; 
	});
	hg.load.specialFile("/tmp/passwords/file3", function (i) { 
		return i == "happy" ? [true, "1275"] : [false, "Incorrect password"]; 
	});

	hg.load.externalFile("/etc/dict/passwords", "ass/password1/passwords.txt");

	hg.load.assignment([
		{
			id: "find",
			evaluate: function (c) { return hg.state.computer.pwd === "/tmp/passwords"; },
			points: 10
		},
		{
			id: "editor",
			evaluate: function (c) { return c.command === "edit" && c.argsString.match(/file/); },
			points: 20
		},
		{
			id: "file1",
			evaluate: function (c) { return c.command === "sensei" && c.argsString === "6873"; },
			points: 30
		},
		{
			id: "file2",
			evaluate: function (c) { return c.command === "sensei" && c.argsString === "0992";},
			points: 40
		},
		{
			id: "file3",
			evaluate: function (c) { return c.command === "sensei" && c.argsString === "1275";},
			points: 40
		}
	], {
		startTime: 0
	});

}).call(this, jQuery, HackerGame);
