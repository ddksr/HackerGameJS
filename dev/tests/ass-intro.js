module("assignment/intro");

// This needs to be called if not thw whole module is tesetd
var nextTest = function () {
	hgTest.next();
};

asyncTest("gameflow", function () {
	var a = HackerGame.action,
	c = hgTest.addCallback, 
		hg = HackerGame,
		maxTaskPoints = 0,
		completedTasks = function () {
			return $("#tab-task li").length;
		},
		bonus = function () { return parseInt(hg.timer.lastCounter / 20, 10); },
		t = function (text) { 
			hg.term.enable();
			hg.term.focus(true); 
			hg.term.exec(text); 
		};

	nextTest = function () {};

	c(function () {
		a.input("editor");
	});
	
	c(function () {
		ok($("#link-input-editor").is(".active"), "Editor tab selected.");
		ok($("#input-editor").css("display") != "none", "Editor loaded.");
		a.input("terminal");
	});

	c(function () {
		ok($("#link-input-terminal").is(".active"), "Terminal tab selected.");
		ok($("#input-terminal").css("display") != "none", "Terminal loaded.");
		a.tab("learn-more");
	});
	
	c(function () {
		ok($("#link-tab-learn-more").is(".active"), "Learn more tab selected.");
		ok($("#tab-learn-more").css("display") != "none", "Learn more loaded.");
		a.tab("try-it-out");
	});
	
	c(function () {
		ok($("#link-tab-try-it-out").is(".active"), "Try it out tab selected.");
		ok($("#tab-try-it-out").css("display") != "none", "Try it out loaded.");
		a.tab("task");
	});

	
	c(function () {
		ok($("#link-tab-task").is(".active"), "Tasks tab selected.");
		ok($("#tab-task").css("display") != "none", "Tasks loaded.");
		a.tab("assignment");
	});

	
	c(function () {
		ok($("#link-tab-assignment").is(".active"), "Instructions tab selected.");
		ok($("#tab-assignment").css("display") != "none", "Instructions loaded.");
		a.tab("task");
	});

	c(function () {
		a.assignment("intro");
	});

	c(function () {
		maxTaskPoints = hg.assignment.maxTaskPoints;
		hg.mail.open();
	}, 1000);

	c(function () {
		$("#mailButton").click();
	}, 1000);

	c(function () {
		$("#button-start-game").click();
	}, 500);

	c(function () {
		ok($("#link-page-game.disabled").length == 0, "Game link enabled.");
		ok($("#page-game").css("display") != "none", "Game page loaded.");
		
		equal($("#stats-completed-tasks").text(), "0/8", "Completed tasks in DOM.");

		equal(completedTasks(), 1, "Task prepared.");

		HackerGame.term.focus(true);
		t("echo bla");
	}, 3000);

	c(function () {
		equal(completedTasks(), 2, "1. task OK.");
		
		equal($("#stats-completed-tasks").text(), "1/8", "Completed tasks in DOM.");

		t("echo bla");
	}, 500);

	c(function () {
		equal(completedTasks(),  2, "2. task NOT OK.");
		t("echo hello world!!!");
	});

	c(function () {
		equal(completedTasks(),  3, "2. task OK.");
		equal($("#stats-completed-tasks").text(), "2/8", "Completed tasks in DOM.");
		
		t("help");
	});

	c(function () {
		equal(completedTasks(),  3, "3. task NOT OK.");
		t("help sensei");
	});

	c(function () {
		equal(completedTasks(),  3, "3. task NOT FULLY OK.");
		t("sensei bu");
	});

	c(function () {
		equal(completedTasks(),  4, "3. task OK.");

		equal($("#stats-completed-tasks").text(), "3/8", "Completed tasks in DOM.");

		t("sensei " + (Math.floor(hg.timer.counter/60) - 2));
	});

	c(function () {
		equal(completedTasks(),  4, "4. task NOT OK.");
		t("sensei " + Math.floor(hg.timer.counter/60));
	});

	c(function () {
		equal(completedTasks(),  5, "4. task OK.");

		equal($("#stats-completed-tasks").text(), "4/8", "Completed tasks in DOM.");

		t("sensei " + (hg.stats.currentScore + 100));
	});
	  
	
	c(function () {
		equal(completedTasks(),  5, "5. task NOT OK.");

		t("sensei " + (hg.stats.currentScore));
	});

	c(function () {
		equal(completedTasks(),  6, "5. task OK.");

		equal($("#stats-completed-tasks").text(), "5/8", "Completed tasks in DOM.");

		t("sensei " + (hg.stats.currentScore));
	});
	
	// TODO: test help
	
	c(function () {
		equal(completedTasks(),  6, "6. task NOT OK.");
		t("pwd");
	});
	
	c(function () {
		equal(completedTasks(),  7, "6. task OK.");
		equal($("#stats-completed-tasks").text(), "6/8", "Completed tasks in DOM.");
		t("help");
	});

	
	c(function () {
		equal(completedTasks(),  7, "7. task NOT OK.");
		t("tree");
	});

	c(function () {
		equal(completedTasks(),  7, "7. task NOT OK.");
		t("help tree");
	});
	
	// TODO: test hint
	
	c(function () {
		equal(completedTasks(),  7, "7. task NOT OK.");
		t("tree home");
	});

	c(function () {
		equal(completedTasks(),  7, "7. task NOT OK.");
		t("tree /home");
	});
	
	c(function () {
		equal(completedTasks(),  8, "7. task OK.");
		equal($("#stats-completed-tasks").text(), "7/8", "Completed tasks in DOM.");
		t("help");
	});

	c(function () {
		equal(completedTasks(),  8, "8. task NOT OK.");
		t("sensei help");
	});

	c(function () {
		equal(completedTasks(),  8, "8. task OK.");
		equal($("#stats-completed-tasks").text(), "8/8", "Completed tasks in DOM.");
		equal(hg.stats.currentScore, maxTaskPoints + bonus());
		
	});

	c(function () {
		equal($("#stats-completed-assignments").text(), "1/" + hg.ind.NUM_OF_ASSIGNMENTS, "Completed assignments in DOM.");
	});


	c(function () {
		a.input("editor");
	});
	
	c(function () {
		ok($("#link-input-editor").is(".active"), "Editor tab selected.");
		ok($("#input-editor").css("display") != "none", "Editor loaded.");
		a.input("terminal");
	});

	c(function () {
		ok($("#link-input-terminal").is(".active"), "Terminal tab selected.");
		ok($("#input-terminal").css("display") != "none", "Terminal loaded.");
		a.tab("learn-more");
	});
	
	c(function () {
		ok($("#link-tab-learn-more").is(".active"), "Learn more tab selected.");
		ok($("#tab-learn-more").css("display") != "none", "Learn more loaded.");
		a.tab("try-it-out");
	});
	
	c(function () {
		ok($("#link-tab-try-it-out").is(".active"), "Try it out tab selected.");
		ok($("#tab-try-it-out").css("display") != "none", "Try it out loaded.");
		a.tab("task");
	});

	
	c(function () {
		ok($("#link-tab-task").is(".active"), "Tasks tab selected.");
		ok($("#tab-task").css("display") != "none", "Tasks loaded.");
		a.tab("assignment");
	});

	
	c(function () {
		ok($("#link-tab-assignment").is(".active"), "Instructions tab selected.");
		ok($("#tab-assignment").css("display") != "none", "Instructions loaded.");
		a.tab("task");
	});

	c(function () {
		// Important, reinitialization:
		hg.action.assignment("intro");
	});
	c(function () {
		hg.mail.open();
	}, 1000);

	c(function () {
		$("#mailButton").click();
	}, 1000);

	c(function () {
		$("#button-start-game").click();
	}, 500);

	c(function () {
		t("echo bla");
	});

	// CHECK HELP
	c(function () {
		$("#tab-task li:last").find(".help").click();
	});
	c(function () {
		$("#tab-task li:last").find(".help").click();
	});
	
	// Check HINT
	c(function () {
		$("#tab-task li:last").find(".hint").click();
	});
	c(function () {
		$("#tab-task li:last").find(".hint").click();
	});

	c(function () {
		t("echo hello world!!!");
	});
	c(function () {
		t("help sensei");
	});
	c(function () {
		t("sensei bu");
	});
	c(function () {
		t("sensei " + Math.floor(hg.timer.counter/60));
	});
	c(function () {
		t("sensei " + (hg.stats.currentScore));
	});
	c(function () {
		t("pwd");
	});
	c(function () {
		t("tree");
	});

	// Check HINT again
	c(function () {
		$("#tab-task li:last").find(".hint").click();
	});
	c(function () {
		$("#tab-task li:last").find(".hint").click();
	});

	c(function () {
		t("tree /home");
	});
	c(function () {
		t("sensei help");
	});

	c(function () {
		var penalties =  parseInt(0.75 * 10, 10) + parseInt(0.75 * 25, 10);
		equal(completedTasks(),  8, "8. task OK.");
		equal($("#stats-completed-tasks").text(), "8/8", "Completed tasks in DOM.");
		equal($("#stats-completed-assignments").text(), "1/" + hg.ind.NUM_OF_ASSIGNMENTS, "Completed assignments in DOM.");
		
		// HINT PENALTY and TIME BONUS
		equal(hg.stats.currentScore, maxTaskPoints - penalties + bonus(), "Score corectly calculated.");
	});

	hgTest.runCallbacks(1000);
});


nextTest();
