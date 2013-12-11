(function ($, hg) {

	
	hg.state.makeDir("/tmp/backup");
	hg.state.makeDir("/tmp/dir");
	hg.util.setFile("/tmp/dir/textfile", "This is a file");
	hg.util.setFile("/tmp/dir/binfile", null);
	hg.util.setFile("/tmp/dir/somefile", "This file needs to be renamed");

	hg.load.assignment([
		{
			id: "find",
			evaluate: function (c) { return hg.state.computer.pwd === "/tmp"; },
			points: 10
		},
		{
			id: "backup",
			evaluate: function (c) { 
				var tmp = hg.state.computer.fs.tmp;
				return tmp.dir.textfile === tmp.dir.textfile_bak;
			},
			points: 20
		},
		{
			id: "edit",
			evaluate: function (c) { 
				var tmp = hg.state.computer.fs.tmp;
				return tmp.dir.textfile !== tmp.dir.textfile_bak;
				
			},
			points: 20
		},
		{
			id: "copyInto",
			evaluate: function (c) { 
				var tmp = hg.state.computer.fs.tmp;
				return tmp.dir.textfile_bak === tmp.backup.textfile_bak;
			},
			points: 20
		},
		{
			id: "moveBin",
			evaluate: function (c) { 
				var tmp = hg.state.computer.fs.tmp;
				return tmp.dir.binfile === undefined && tmp.backup.binfile === null;
			},
			points: 20
		},
		{
			id: "rename",
			evaluate: function (c) { 
				var tmp = hg.state.computer.fs.tmp,
					status2 = c.command === "mv",
					status1 = tmp.dir === undefined && typeof(tmp.directory) === "object";
				return status1 && status2;
			},
			points: 30
		}
	], {
		startTime: 0
	});

}).call(this, jQuery, HackerGame);
