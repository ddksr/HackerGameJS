module("util");

test("util.extend", function () {
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

test("util.randIP", function () {
	var ip, 
		i, 
		testFun = function (i, seg) {
			ok(seg > 0 && seg < 256, "IP segment size ok, "+i+". experiment.");
		};
	for (i = 0; i < 100; i++) {
		ip = HackerGame.util.randIP().split(".");
		ok(ip.length == 4, "Correct IP size, "+i+". experiment.");
		$.each(ip, testFun);
		ok($.inArray(ip[0], [10,127,254,255,1,2,169,172,192]) == -1, "First IP segment ok, "+i+". experiment.");
	}
});

test("util.randResponseTime", function () {
	var rand = HackerGame.util.randResponseTime(10, 20),
		rands = [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()];
	$.each(rands, function (i, val) {
		ok(val <= 20 && val >= 10, "Random generagor works, " + i + ". experiment.");
	});
});

test("util.fileType", function () {
	var fn = HackerGame.util.fileType;
	equal(fn({}), "d", "Empty directory");
	equal(fn({ a: null }), "d", "Non-empty directory");
	equal(fn(null), "b", "Binary file.");
	equal(fn("a"), "t", "Text file.");
	equal(fn(""), "t", "Empty text file.");
});

test("util.path", function () {
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

test("util.checkFilePermission", function () {
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

test("util.pathIterator", function () {
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

test("util.fileExists", function () {
	var fn = HackerGame.util.fileExists,
		fs = HackerGame.state.computer.fs;
	
	ok(fn("/") && fs !== undefined, "Root found.");
	ok(fn("/bin") && fs.bin !== undefined, "/bin found.");
	ok(fn("/bin/..") && fs !== undefined, "/bin/.. found.");
	ok(fn(".") && fs !== undefined, ". found.");
	ok(fn(".././bin") && fs.bin !== undefined, "/.././bin found.");
	ok(fn(".././bin/") && fs.bin !== undefined, "/.././bin/ found.");
	ok(fn("../../bin/..") && fs !== undefined, "../../bin/.. found.");
	ok(fn("./.") && fs !== undefined, "./. found.");
	
});
