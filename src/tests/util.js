module("util");

test("extend", function () {
	var defaultObj = {
			a: 1,
			b: 2,
			n: "bla",
			c: {
				x: 1,
				y: 2,
				z: {},
				d: {},
				e: {}
			}
		},
		overObj = {
			a: 2,
			c: {
				x: 2,
				y: 2,
				z: { a: 1 },
				d: "x",
				f: "y"
			},
			n: null
		},
		resObj = {
			a: 2,
			b: 2,
			n: null,
			c: {
				x: 2,
				y: 2,
				z: { }, // because default keys (settings) have priority over overObj keys
				d: "x",
				e: {},
			}

		};
	deepEqual(HackerGame.util.extend(defaultObj, overObj), resObj, "Object extending works.");
});

test("parseInput", function () {
	var fn = HackerGame.util.parseInput,
		testExpect = {
			'echo': ['echo', "", [], ""],
			'echo "': ['echo', null, null, '"'],
			'echo /': ['echo', "/", ['/'], "/"],
			'echo bu': ['echo', 'bu', ['bu'], 'bu'],
			'echo a b': ['echo', 'a b', ['a', 'b'], 'a b'],
			'echo test d': ['echo', 'test d', ['test', 'd'], 'test d'],
			'echo bu bu bu': ['echo', 'bu bu bu', ['bu', 'bu', 'bu'], 'bu bu bu'],
			'echo "bu"': ['echo', 'bu', ['bu'], '"bu"'],
			'echo "bu\'s bu"': ['echo', 'bu\'s bu', ['bu\'s bu'], '"bu\'s bu"'],
			'echo \'bla bla\' "bla \' bla" "bla" bla': [
				'echo',
				'bla bla bla \' bla bla bla',
				['bla bla', 'bla \' bla', 'bla', 'bla'],
				'\'bla bla\' "bla \' bla" "bla" bla'
			]
		};
	$.each(testExpect, function (t, e) {
		deepEqual(fn(t), e, t);
	});
});

test("randIP", function () {
	var ip, 
		i, 
		testFun = function (i, seg) {
			ok(seg >= 0 && seg < 256, "IP segment size ok, "+i+". experiment.");
		};
	for (i = 0; i < 100; i++) {
		ip = HackerGame.util.randIP().split(".");
		ok(ip.length == 4, "Correct IP size, "+i+". experiment.");
		$.each(ip, testFun);
		ok($.inArray(ip[0], [10,127,254,255,1,2,169,172,192]) == -1, "First IP segment ok, "+i+". experiment.");
	}
});

test("randResponseTime", function () {
	var rand = HackerGame.util.randResponseTime(10, 20),
		rands = [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()];
	$.each(rands, function (i, val) {
		ok(val <= 20 && val >= 10, "Random generagor works, " + i + ". experiment.");
	});
});

test("fileType", function () {
	var fn = HackerGame.util.fileType;
	equal(fn({}), "d", "Empty directory");
	equal(fn({ a: null }), "d", "Non-empty directory");
	equal(fn(null), "b", "Binary file.");
	equal(fn("a"), "t", "Text file.");
	equal(fn(""), "t", "Empty text file.");
});

test("path", function () {
	var fn = HackerGame.util.path,
		pwd = HackerGame.state.computer.pwd;
	deepEqual(fn("/"), [], "Root works.");
	deepEqual(fn("/bla"), ["bla"], "Root nodes work.");
	deepEqual(fn("bla"), ["bla"], "Relative path from root works.");
	deepEqual(fn("/bla/ble"), ["bla", "ble"], "Absolute path works.");
	deepEqual(fn("bla/ble"), ["bla", "ble"], "Long relative path from root works.");

	HackerGame.state.changeDir("/bin");
	deepEqual(fn("/"), [], "Root after chdir works.");
	deepEqual(fn(), ["bin"], "Default (PWD) works.");
	deepEqual(fn("bla"), ["bin", "bla"], "Longer relative path works.");
	deepEqual(fn("bla/ble"), ["bin", "bla", "ble"], "Longest relative path works.");


	HackerGame.state.changeDir(pwd);
	deepEqual(fn("bla/ble"), ["bla", "ble"], "After chdir to previous PWD, path works.");
});

test("checkFilePermission", function () {
	var fn = HackerGame.util.checkFilePermission;

	strictEqual(fn("bla/bla"), null, "Root no permission.");
	strictEqual(fn(false), null, "False as input is forbidden.");
	strictEqual(fn(""), null, "Empty string as input is forbidden.");
	strictEqual(fn(["bla"]), null, "Array as input is forbidden.");

	strictEqual(fn("/"), false, "Root no permission.");
	strictEqual(fn("/bin"), false, "Bin no permission.");
	strictEqual(fn("/home"), false, "Home no permission.");
	strictEqual(fn("/tmp"), true, "tmp has permission.");
	strictEqual(fn("/home/bla"), true, "home/bla has permission.");
});

test("pathIterator", function () {
	var fn = HackerGame.util.pathIterator, status = false;
	
	status = false;
	fn("/", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found root");
	
	status = false;
	fn("/bin", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found /bin");
	
	status = false;
	fn("/bin/..", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found /bin/..");

	status = false;
	fn("/bin/.", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found /bin/.");

	status = false;
	fn("/bin/../..", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found /bin/../..");

	status = false;
	fn("/bin/.././bin/.././bin", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found /bin/.././bin/.././bin");

	status = false;
	fn("/bin/.././bin/.././bin/", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found /bin/.././bin/.././bin/");

	status = false;
	fn("bin", function (obj) {
		status = obj !== undefined;
	});
	ok(status, "Found bin from root");

	status = false;
	fn("/gagagagagagaga", function (obj) {
		status = obj !== undefined;
	});
	ok(! status, "Didn't found /gagagagagagaga");
	
	
	status = false;
	fn("/bin/gagagagagagaga", function (obj) {
		status = obj !== undefined;
	});
	ok(! status, "Didn't found /bin/gagagagagagaga");
});

test("fileExists", function () {
	var fn = HackerGame.util.fileExists,
		fs = HackerGame.state.computer.fs;
	
	ok(fn("/") === (fs !== undefined), "Root found.");
	ok(fn("/bin") === (fs.bin !== undefined), "/bin found.");
	ok(fn("/bin/..") === (fs !== undefined), "/bin/.. found.");
	ok(fn(".") === (fs !== undefined), ". found.");
	ok(fn(".././bin") === (fs.bin !== undefined), "/.././bin found.");
	ok(fn(".././bin/") === (fs.bin !== undefined), "/.././bin/ found.");
	ok(fn("../../bin/..") === (fs !== undefined), "../../bin/.. found.");
	ok(fn("./.") === (fs !== undefined), "./. found.");
	

	ok(fn("/bin/tree") === (fs.bin.tree !== undefined), "/bin/tree found.");
	ok(fn("/../bin/../bin/tree") === (fs.bin.tree !== undefined), "/../bin/../bin/tree found.");
	ok(fn("/etc/hostname") === (fs.etc.hostname !== undefined), "/etc/hostname found.");
	ok(fn("/bin/./../etc/./hostname") === (fs.etc.hostname !== undefined), "/bin/./../etc/./hostname found.");
	

	ok(fn("../nonexisting") === (fs.nonexisting !== undefined), "../nonexisting not found.");
	ok(fn("../bin/nonexisting") === (fs.bin.nonexisting !== undefined), "../bin/nonexisting not found.");
});

test("isDir", function () {
	var fn = HackerGame.util.isDir, pwd = HackerGame.state.computer.pwd;

	// doesn't exist
	ok(! fn("/nonexistingdir"), "Nonexisting file.");
	
	// is file but not dir
	ok(! fn("/bin/tree"), "Existing file but not directory.");

	// root
	ok(fn("/"), "There really is a root.");
	ok(fn("/../../"), "And the root is the ultimate begining and end!");

	// is file and dir
	ok(fn("/bin/"), "/bin/ is dir");
	ok(fn("/bin"), "/bin is dir");

	HackerGame.state.changeDir("/");
	ok(fn("bin"), "bin is dir");

	HackerGame.state.changeDir("/bin");
	ok(! fn("bin"), "bin is not dir from /bin");

	HackerGame.state.changeDir(pwd);
});

test("cleanPath", function () {
	var fn = HackerGame.util.cleanPath,
		testStrings = {
			"/" : "/",
			"/../": "/",
			"/..":  "/",
			"/bin/../": "/",
			"/bin/..": "/",
			"/etc/./setts/": "/etc/setts",
			"/.././etc/../etc/./": "/etc",
			"bla/ble": "bla/ble",
			"bla/ble/": "bla/ble",
			"bla/../ble": "ble",
			"bla/../ble/": "ble",
			".": "",
			"bla/./ble/..": "bla"
		};
	$.each(testStrings, function (input, expected) {
		equal(fn(input), expected, input + " ok.");
	});
});

test("absPath", function () {
	var fn = HackerGame.util.absPath, 
		pwd = HackerGame.state.computer.pwd,
		testStrings = {
			"tralala": "/bin/tralala",
			"bin/bla": "/bin/bin/bla"
		};
	HackerGame.state.changeDir("/bin");
	$.each(testStrings, function (input, expected) {
		equal(fn(input), expected, input + " ok.");
	});
	HackerGame.state.changeDir(pwd);
});

test("getFile", function () {
	var hg = HackerGame,
		fn = hg.util.getFile,
		fs = hg.state.computer.fs,
		pwd = hg.state.computer.pwd,
		result = null,
		testObj = {
			"/": ["/", "", fs, "d"],
			"/bin": ["/", "bin", fs.bin, "d"],
			"/../": ["/", "", fs, "d"],
			"../bin": ["/", "bin", fs.bin, "d"],
			"../bin/tree": ["/bin/", "tree", null, "b"],
			"/etc/hostname": ["/etc/", "hostname", fs.etc.hostname, "t"],
			"getFile/test1": ["/tmp/getFile/", "test1", {}, "d"],
			"getFile": ["/tmp/", "getFile", {"test1": {}}, "d"],
			"getFile/./test1/../../../bin": ["/", "bin", fs.bin, "d"]
		};
	hg.state.changeDir("/tmp");
	hg.state.makeDir("/tmp/getFile");
	hg.state.makeDir("/tmp/getFile/test1");
	$.each(testObj, function (toTest, expected) {
		deepEqual(fn(toTest), expected, "Get " + toTest);
	});

	hg.state.changeDir(pwd);
});

test("setFile", function () {
	var hg = HackerGame,
		fn = hg.util.getFile,
		fs = hg.state.computer.fs,
		pwd = hg.state.computer.pwd,
		status = false;
	hg.state.makeDir("/tmp/setFile");
	hg.state.changeDir("/tmp/setFile");

	status = hg.util.setFile("/", "bla");
	strictEqual(status, null, "Cannot overwrite root.");
	ok(fs != "bla", "Double check root.");

	hg.state.computer.hasChanged = false;
	status = hg.util.setFile("/bin", "bla");
	strictEqual(status, null, "Cannot overwrite protected files (absolute path).");
	ok(fs.bin != "bla", "Double check /bin.");

	status = hg.util.setFile("../../bin", "bla");
	strictEqual(status, null, "Cannot overwrite protected files (relative path).");
	ok(fs.bin != "bla", "Triple check /bin.");

	// set on root
	status = hg.util.setFile("/setFile", "bla");
	strictEqual(status, true, "Seting a file on root.");
	strictEqual(fs.setFile, "bla", "Check new file on root.");
	ok(hg.state.computer.hasChanged, "State changed");
	hg.state.removeFile("/setFile");
	strictEqual(fs.setFile, undefined, "Removed file.");

	// set on nonexisting path
	status = hg.util.setFile("/tmp/setFile/hoho0/hoho1", {"bla": "bla"});
	strictEqual(status, false, "Seting a file on nonexistant path.");


	// set folder (abs)
	status = hg.util.setFile("/tmp/setFile/hoho1", {"bla": "bla"});
	strictEqual(status, true, "Seting a new dir on absolute path.");
	deepEqual(fs.tmp.setFile.hoho1, {"bla": "bla"}, "Check new dir on absolute path.");


	// set folder (rel)
	status = hg.util.setFile("hoho2", {"bla": "bla"});
	strictEqual(status, true, "Seting a new dir on relative path.");
	deepEqual(fs.tmp.setFile.hoho2, {"bla": "bla"}, "Check new dir on relative path.");
	strictEqual(fs.tmp.setFile.hoho2.bla, "bla", "Check file in new dir on relative path.");

	// set empty folder (rel)
	status = hg.util.setFile("../setFile/./hoho3", {});
	strictEqual(status, true, "Seting a new empty dir on relative path.");
	deepEqual(fs.tmp.setFile.hoho3, {}, "Check new empty dir on relative path.");

	// set binary (abs)
	status = hg.util.setFile("/tmp/setFile/bin1", null);
	strictEqual(status, true, "Seting binary on abs path.");
	strictEqual(fs.tmp.setFile.bin1, null, "Binary on abs path correct.");

	// set binary (rel)
	status = hg.util.setFile("bin2", null);
	strictEqual(status, true, "Seting binary on rel path.");
	strictEqual(fs.tmp.setFile.bin2, null, "Binary on rel path correct.");

	// set text (abs)
	status = hg.util.setFile("/tmp/setFile/txt1", "bla");
	strictEqual(status, true, "Seting text file on abs path.");
	strictEqual(fs.tmp.setFile.txt1, "bla", "Text file on abs path correct.");

	// set text (rel)
	status = hg.util.setFile("/tmp/setFile/txt2", "bla");
	strictEqual(status, true, "Seting text file on relative path.");
	strictEqual(fs.tmp.setFile.txt2, "bla", "Text file on relative path correct.");

	// check overwriting
	status = hg.util.setFile("/tmp/setFile/txt2", "txt2 - bla");
	strictEqual(status, true, "Overwriting text file OK.");
	strictEqual(fs.tmp.setFile.txt2, "txt2 - bla", "Checked overwriting.");

	// remove under
	hg.state.makeDir("setFileUnder");
	hg.state.changeDir("setFileUnder");
	var x = hg.util.setFile("../", {});
	deepEqual(fs.tmp.setFile, {}, "Under removed");
	strictEqual(hg.state.computer.pwd, "/", "PWD = root");


	

	hg.state.changeDir(pwd);
});

test("randomChoice", function () {
	var list = [1,2,3,4,5,6,7,8,9],
		util = HackerGame.util,
		contains = function(array, elt, message) {
			ok(_.contains(array, elt), message);
		};

	for (var i = 0; i < 100; i++) {
		contains(list, util.randomChoice(list), "List contains random element");
	}
	
});


hgTest.next();
