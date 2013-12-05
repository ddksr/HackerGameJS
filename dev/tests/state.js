module("state");

var nextTest = function () {
	hgTest.next();
};

test("filesystem", function () {
	var state = HackerGame.state, 
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
	
	state.removeFile("test1");
	strictEqual(fs.tmp.test1, undefined, "Directory /tmp/test1 removed.");

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

test("state dumping", function () {
	var dump = HackerGame.dump.state();
	strictEqual(dump[0], null, "State dump is null.");
	ok($.isFunction(dump[1]), "State dump callback is callable.");
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
