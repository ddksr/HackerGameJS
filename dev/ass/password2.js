(function ($, hg, _) {
	var hash = hg.util.randomString,
		hash1 = hash(16),
		hash2 = hash(16),
		hash3 = hash(16),
		body = $("#stash #ass-password2-mail").html(),
		dump = [
			["patric.swatson@email.com", hash(16), "my favorite song"], 
			["hunna@email.com", hash1, "first black president"], 
			["rin.hoshiwaka@wakataka.com", hash(16), "..."],
			["john.smith123@email.com", hash(16), "britney"],
			["hotlinda@email.com", hash(16), "my lovely wife"],
			["hannah.montana@iamimportant.com", hash(16)],
			["john.smith@email123.com", hash1, "president"],
			["nina.nana@email.co.uk", hash3, "password123"],
			["hins@email.de", hash1, "barack"],
			["britney.notspears@haircuts.de", hash2, "the lord who loves us"],
			["tin.smith@email.co.uk", hash(16), ""],
			["hansel.gretel@email.de", hash(16), "one two three four five"],
			["lisa.johnson@email.com", hash1, "..."],
			["simon@somemail.com", hash2, "... christ"],
			["philip.andersen@email.org", hash3, "bla bla"]
		],
		dumpStr = _.map(dump, function (row) { 
			return row.join(" - "); 
		}).join("\n"),
		stash = {
			john: {
				cracked: false,
				info: "hf25a",
				password: hg.util.randomChoice([
					"happy", "jesus", "iloveyou", "space"
				])
			},
			simon: {
				cracked: false,
				info: "z7523",
				password: hg.util.randomChoice([
					"123456", "password", "12345", "1234567890", "simon"
				])
			},
			alice: {
				cracked: false,
				info: "dH6ip",
				password: hg.util.randomString(2, true)
			},
			lisa: {
				cracked: false,
				info: "m808o",
				password: "obama"
			},
			ludwig: {
				cracked: false,
				info: "naNc3",
				password: hg.util.randomChoice([
					"marlin123", // dog name,
					"martha123", // wife name
					"benanita", // kids name
					"ludwig123", // his name
					"1963-7-5", // date of birth
				])
			}
		},
		countCrackedFiles = function () {
			var count = 0;
			$.each(stash, function (id, data) {
				if (data.cracked) { count++; }
			});
		}, 
		setPassCrackedAndCheck = function (c, count) {
			if (c.command == "sensei") {
				if (c.args > 1) {
					if (stash[c.args[0]] && stash[c.args[0]].info == c.args[1]) {
						stash[c.args[0]].cracked = true;
					}
				}
			}
			return countCrackedFiles() >= count;
		},
		setFiles = function () {
			hg.state.emptyTmp();
			hg.state.makeDir("/tmp/passwords");
			hg.load.externalFile("/etc/dict/passwords", "ass/password2/passwords.txt");
			$.each(stash, function (id, data) {
				hg.load.specialFile("/tmp/passwords/" + id, function (i) {
					return i == data.password ? [true, data.info] : [false, "Incorrect password"];
				});
			});
			hg.util.setFile("/tmp/passwords/hashes.txt", dumpStr);
		};
	hg.load.assignment([
		{
			id: "sensei",
			set: function () {
				hg.mail.recieve({
					isSensei: true,
					body: body
				}, true); 
				$("#mail").popover("show");
				setFiles();
			},
			evaluate: function (c) {
				return hg.state.computer.pwd == "/tmp/passwords";
			},
			points: 10
		},
		{
			id: "pass1",
			evaluate: function (c) {
				return setPassCrackedAndCheck(c, 1);
			},
			points: 30
		},
		{
			id: "pass2",
			evaluate: function (c) {
				return setPassCrackedAndCheck(c, 2);
			},
			points: 30
		},
		{
			id: "pass3",
			evaluate: function (c) {
				return setPassCrackedAndCheck(c, 3);
			},
			points: 30
		},
		{
			id: "pass4",
			evaluate: function (c) {
				return setPassCrackedAndCheck(c, 4);
			},
			points: 30
		},
		{
			id: "pass5",
			evaluate: function (c) {
				return setPassCrackedAndCheck(c, 5);
			},
			points: 30
		}
	],{
		startTime: 300*6
	});

}).call(this, jQuery, HackerGame, _);
