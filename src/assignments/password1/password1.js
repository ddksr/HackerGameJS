(function ($, hg) {


	hg.state.makeDir("/tmp/passwords");
	hg.load.specialFile("/tmp/passwords/amanda", function (i) { 
		return i == "123" ? [true, "Monica"] : [false, "Incorrect password"]; 
	});

	hg.load.specialFile("/tmp/passwords/silvia", function (i) { 
		return i == "axb" ? [true, "has"] : [false, "Incorrect password"]; 
	});
	hg.load.specialFile("/tmp/passwords/franny", function (i) { 
		return i == "happy" ? [true, "a pickle"] : [false, "Incorrect password"]; 
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
			evaluate: function (c) { return c.command === "edit" && c.argsString.match(/amanda/); },
			points: 20
		},
		{
			id: "file1",
			evaluate: function (c) { return c.command === "sensei" && c.argsString === "Monica"; },
			points: 30
		},
		{
			id: "file2",
			evaluate: function (c) { return c.command === "sensei" && c.argsString === "has";},
			points: 40
		},
		{
			id: "file3",
			evaluate: function (c) { return c.command === "sensei" && c.argsString === "a pickle";},
			points: 40
		}
	], {
		startTime: 0
	});

}).call(this, jQuery, HackerGame);
