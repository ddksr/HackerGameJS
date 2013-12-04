module("simple");

test("loading", function () {
	ok(window.HackerGame, "HackerGame loaded");


	var modules = [
		"cons", "network", "util", "action", "include", "dump", "editor",
		"load", "ind", "stats", "mail"
	];
	
	$.each(modules, function (i, mod) {
		ok(HackerGame[mod], "HackerGame." + mod + " is loaded.");
	});

	// JQuery plugins
	ok($.fn.hackerGame, "$(sel).hackerGame loaded.");
	ok($.fn.hackerGameTimer, "$(sel).hackerGame loaded.");
	ok($.fn.hackerGameEditor, "$(sel).hackerGame loaded.");
	ok($.fn.hgBlink, "$(sel).hackerGame loaded.");
});

test("initialialization", function () {
	ok(HackerGame.state, "State loaded.");
	ok(HackerGame.state.computer, "Computer loaded.");
	ok(! HackerGame.assignment, "Assignment not loaded.");
	ok(HackerGame.term.length > 0, "Terminal initialized");
	ok($("body.loading").length == 0, "Loading finished.");
});

test("translations", function () {
	var string = "This string doesn't have a translation. Hopefuly. Probably not.";
	equal(HackerGame.t(string), string, "Translation returned the same string.");
});

hgTest.next();
