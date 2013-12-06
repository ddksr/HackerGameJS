module("state");

var nextTest = function () {
	hgTest.next();
};

test("filesystem", function () {
	var state = HackerGame.state, 
		hg = HackerGame,
		fs = state.computer.fs,
		status = false,
		pwd = function () { return state.computer.pwd; },
		prevPwd = pwd();

	state.changeDir("/");
	equal(pwd(), "/", "Directory changed.");

	state.makeDir("/tmp/test1");
	ok(typeof(fs.tmp.test1) == "object" && fs.tmp.test1 !== null, "Directory /tmp/test1 created.");

	state.changeDir("tmp");
	equal(pwd(), "/tmp", "PWD changed to /tmp");
	
	state.makeDir("test2");
	ok(typeof(fs.tmp.test2) == "object" && fs.tmp.test2 !== null, "Directory /tmp/test2 created.");

	state.makeDir("test2/test21");
	ok(typeof(fs.tmp.test2.test21) == "object" && fs.tmp.test2.test21 !== null, "Directory /tmp/test2/test22 created.");
	
	hg.state.computer.hasChanged = false;

	state.removeFile("test1");
	strictEqual(fs.tmp.test1, undefined, "Directory /tmp/test1 removed.");
	ok(hg.state.computer.hasChanged, "State has changed!");


	state.changeDir("test2/test21");
	equal(pwd(), "/tmp/test2/test21", "PWD changed to /tmp/test2/test21");
	
	fs.tmp.text_file = "blabla";
	status = false;
	HackerGame.util.pathIterator("/tmp/text_file", function (contents) {
		status = typeof(contents) == "string";
	});
	ok(status, "File 'text_file' created");

	state.removeFile("../../text_file");
	strictEqual(fs.tmp.text_file, undefined, "File 'text_file' removed.");

	state.makeDir("/tmp/test2/test22");
	ok(typeof(fs.tmp.test2.test22) == "object" && fs.tmp.test2.test22 !== null, "Directory /tmp/test2/test22 created.");
	state.removeFile("/tmp/test2/test22");
	strictEqual(fs.tmp.test2.test22, undefined, "Directory /tmp/test2/test22 removed");

	state.makeDir("removeIn");
	ok(typeof(fs.tmp.test2.test21.removeIn) == "object" && fs.tmp.test2.test21.removeIn !== null, "Directory /tmp/test2/test22/removeIn created.");
	state.changeDir("removeIn");
	equal(pwd(), "/tmp/test2/test21/removeIn", "PWD changed to /tmp/test2/test21/removeIn");
	state.removeFile(".");
	strictEqual(fs.tmp.test2.test21.removeIn, undefined, "'removeIn' directory removed.");
	equal(pwd(), "/", "After removing current directory, PWD changed to /");

	state.changeDir("/tmp/test2/test21");
	equal(pwd(), "/tmp/test2/test21", "PWD changed to /tmp/test2/test21");
	state.removeFile("..");
	equal(pwd(), "/", "After removing parent directory, PWD changed to /");
	strictEqual(fs.tmp.test2, undefined, "/tmp/test2 removed");

	state.changeDir(prevPwd);
	ok(prevPwd == pwd(), "Went back to first PWD.");
});

test("computer dumping", function () {
	var dump = null;

	HackerGame.util.setFile("/tmp/dump", "bla");

	strictEqual(HackerGame.state.computer.hasChanged, true, "State changed");
	dump = HackerGame.dump.computer();

	ok($.isFunction(dump[1]), "Callback recieved");
	ok(dump[0] !== null, "Dump recieved");

	strictEqual(HackerGame.state.computer.hasChanged, false, "State dumped and reset");
	dump[1]();
	strictEqual(HackerGame.state.computer.hasChanged, true, "State back to previous state.");
});

test("state dumping", function () {
	var dump = HackerGame.dump.state();
	strictEqual(dump[0], null, "State dump is null.");
	ok($.isFunction(dump[1]), "State dump callback is callable.");
});

test("filesystem - moving and copying files", function () {
	var hg = HackerGame,
		pwd = hg.state.computer.pwd,
		cp = hg.state.copy,
		fs = hg.state.computer.fs,
		status = false,
		dirExample = {"x": {}, "y": "", "z": "123", "w": null},
		mv = hg.state.move;

	hg.state.makeDir("/tmp/mvcp");
	hg.state.makeDir("/tmp/mvcp2");
	hg.state.changeDir("/tmp/mvcp");
	
	hg.state.computer.hasChanged = false;
	
	// create files
	hg.util.setFile("edir", {});
	hg.util.setFile("dir", dirExample);
	hg.util.setFile("txt", "txt");
	hg.util.setFile("bin", null);

	// rename dir
	mv("dir", "dir2");
	strictEqual(fs.tmp.mvcp.dir, undefined, "When renaming, dir doesn't exist anymore.");
	strictEqual(fs.tmp.mvcp.dir2, dirExample, "Pointers are equal after rename!");
	mv("/tmp/mvcp/dir2", "dir3");
	strictEqual(fs.tmp.mvcp.dir2, undefined, "When renaming, dir doesn't exist anymore.");
	strictEqual(fs.tmp.mvcp.dir3, dirExample, "Pointers are equal again after rename!");
	deepEqual(fs.tmp.mvcp.dir3, dirExample, "Objects are equal again after rename!");
	mv("dir3", "../mvcp/./dir");
	strictEqual(fs.tmp.mvcp.dir, dirExample, "Everything back to normal.");
	
	ok(hg.state.computer.hasChanged, "State changed!");

	// move dir into dir
	mv("dir", "../mvcp2");
	strictEqual(fs.tmp.mvcp.dir, undefined, "Removed dir.");
	strictEqual(fs.tmp.mvcp2.dir, dirExample, "Dir moved into another dir with same name");
	mv("../mvcp2/dir", ".");
	strictEqual(fs.tmp.mvcp.dir, dirExample, "Dir moved to current directory.");
	strictEqual(fs.tmp.mvcp2.dir, undefined, "Dir doesn't exist anymore.");

	// move binary
	mv(".././mvcp/./bin", "/../../tmp/mvcp2/bin2");
	strictEqual(fs.tmp.mvcp.bin, undefined, "bin removed from mvcp.");
	strictEqual(fs.tmp.mvcp2.bin2, null, "bin moved from mvcp2 as bin2.");
	
	mv("../mvcp2/bin2", "bin");
	strictEqual(fs.tmp.mvcp2.bin2, undefined, "Remove of bin2 succeeded.");
	strictEqual(fs.tmp.mvcp.bin, null, "Copy of bin succeeded.");

	// rename text
	mv("txt", "./txt2");
	strictEqual(fs.tmp.mvcp.txt, undefined, "Removed txt.");
	strictEqual(fs.tmp.mvcp.txt2, "txt", "Renamed txt to txt2.");

	// move text into dir
	mv("txt2", "../mvcp2");
	strictEqual(fs.tmp.mvcp.txt2, undefined, "Removed txt again.");
	strictEqual(fs.tmp.mvcp2.txt2, "txt", "Moved into folder without renaming it.");

	// move text back
	mv("../mvcp2/txt2", "txt");
	strictEqual(fs.tmp.mvcp.txt, "txt", "Text back.");
	strictEqual(fs.tmp.mvcp2.txt2, undefined, "And removed from mvcp2.");
	
	// move protected file
	status = mv("/bin", "/tmp");
	strictEqual(status, null, "Cannot move protected file (abs).");
	status = mv("../../bin", "/tmp");
	strictEqual(status, null, "Cannot move protected file (relative).");

	// copy dir
	cp("dir", "dir2");
	ok(fs.tmp.mvcp.dir !== fs.tmp.mvcp.dir2, "Copied dir's pointer not equal to original.");
	deepEqual(fs.tmp.mvcp.dir, fs.tmp.mvcp.dir2, "But the content is the same!");
	cp("/tmp/mvcp/dir2", "../mvcp2/dir2");
	deepEqual(fs.tmp.mvcp2.dir2, fs.tmp.mvcp.dir, "Check third with original.");
	deepEqual(fs.tmp.mvcp2.dir2, fs.tmp.mvcp.dir2, "Check third with the previous.");

	// copy dir into dir
	cp("./dir", "../mvcp2/");
	deepEqual(fs.tmp.mvcp2.dir, fs.tmp.mvcp.dir, "Copy dir into dir.");
	fs.tmp.mvcp2.dir.not = "here!"; // check pointers again
	notDeepEqual(fs.tmp.mvcp.dir, fs.tmp.mvcp2.dir, "Pointers defenetlly not equal!");

	// copy bin
	cp("bin", "bin222");
	strictEqual(fs.tmp.mvcp.bin, fs.tmp.mvcp.bin222, "Bin file copied.");

	// copy txt
	cp("txt", "txt222");
	strictEqual(fs.tmp.mvcp.txt, fs.tmp.mvcp.txt222, "Text file copied.");

	// copy txt into folder
	status = cp("txt", "../mvcp2/.");
	strictEqual(fs.tmp.mvcp2.txt, fs.tmp.mvcp.txt, "Text file copied into folder.");

	// copy protected
	cp("/bin", ".");
	deepEqual(fs.tmp.mvcp.bin, fs.bin, "Protected successfully copied.");
	fs.tmp.mvcp.bin.hulahop = null;
	notDeepEqual(fs.tmp.mvcp.bin, fs.bin, "Protected successfully copied (without pointers).");

	hg.state.changeDir(pwd);
});

test("stats", function () {
	var s = HackerGame.stats,
		assNum = HackerGame.config.assignments.length,
		completedAssignments = s.completedAssignments,
		completedTasks = s.completedTasks,
		bestScore = s.bestScore,
		currentScore = s.currentScore,
		overallScore = s.overallScore,
		names = ["bestScore", "currentScore", "overallScore"];
	
	// Reset
	$.each(names, function (i, name) {
		s[name] = 0;
	});

	// Increment
	$.each(names, function (i, name) {
		s.increment(name, 10);
	});
	
	// Test values
	$.each(names, function (i, name) {
		equal(s[name], 10, name + " stat OK.");
	});
	

	// increment hold
	$.each(names, function (i, name) {
		s.increment(name, 10, true);
	});
	
	// Test values
	$.each(names, function (i, name) {
		equal(s[name], 20, name + " stat OK.");
	});	


	equal($("#stats-completed-tasks").text(), "0/0", "Completed tasks in DOM unchanged.");
	equal($("#stats-completed-assignments").text(), "0/"+assNum, "Completed assignments in DOM unchanged.");
	equal($("#stats-current-score").text(), "10", "Current score in DOM unchanged.");
	equal($("#stats-best-score").text(), "10", "Best score in DOM unchanged.");
	equal($("#stats-overall-score").text(), "10", "Overall score in DOM unchanged.");

	s.refresh();
	equal($("#stats-completed-tasks").text(), "0/0", "Completed tasks in DOM unchanged.");
	equal($("#stats-completed-assignments").text(), "0/"+assNum, "Completed assignments in DOM unchanged.");
	equal($("#stats-current-score").text(), "20", "Current score in DOM unchanged.");
	equal($("#stats-best-score").text(), "20", "Best score in DOM unchanged.");
	equal($("#stats-overall-score").text(), "20", "Overall score in DOM unchanged.");


	// Restore
	s.bestScore = bestScore;
	s.currentScore = currentScore;
	s.overallScore = overallScore;
	s.completedAssignments = completedAssignments;
	s.completedTasks = completedTasks;
	s.refresh();
});


asyncTest("pages", function () {
	var a = HackerGame.action, c = hgTest.addCallback;

	nextTest = function () {};

	ok($("#link-page-game").is(".disabled"), "Game link disabled");

	c(function () {
		a.page("help");
	});
	c(function () {
		ok($("#page-help").css("display") != "none", "Help page loaded.");
		a.page("disclaimer");
	});
	c(function () {
		ok($("#page-disclaimer").css("display") != "none" , "Disclaimer page loaded.");
		a.page("getting-started");
	});
	c(function () {
		ok($("#page-getting-started").css("display") != "none" , "Getting started page loaded.");
		a.page("assignments");
	});
	c(function () {
		ok($("#page-assignments").css("display") != "none" , "Assignments page loaded.");
		a.page("game");
	});
	c(function () {
		ok($("#page-game").css("display") == "none", "Game page disabled.");
		a.page("disclaimer");
	});

	hgTest.runCallbacks(2500);
});

 


nextTest();
