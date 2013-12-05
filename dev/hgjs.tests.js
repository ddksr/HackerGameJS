hgTest = {};

var tests = [
	"simple", "util", "state",
	"ass-intro"
];

(function ($, hg) {
	var $li = $(document.createElement("li")), 
		iTest = 0,
		iCallback = 0,
		defaultCallbackWait = 1000,
		callbackWait = defaultCallbackWait,
		finish = function () {
			
		},
		callbacks = [],
		nextCallback = function () {
			callbacks[iCallback].call(null);
			iCallback += 1;

			if (iCallback >= callbacks.length) {
				callbacks = [];
				iCallback = 0;
				start(); // qunit: start async testing
			}
			else {
				setTimeout(function () {
					nextCallback();
				}, callbackWait);
			}
		},
		runTestSuite = function (i) {
			if (i >= tests.length) { 
				finish();
				return; 
			}
			
			$.getScript("tests/" + tests[i] + ".js");
		};

	$li.append($(document.createElement("a")).attr("href", "#/test/").text("TEST"));
	
	$("#page-links").append($li);
	$("#qunit,#qunit-fixture").hide();


	hg.action.test = function () {
		hgTest.run();
	};
	
	hgTest.next = function () {
		iTest += 1;
		runTestSuite(iTest);
	};
	
	hgTest.run = function () {
		$("#qunit,#qunit-fixture").show();
		$li.empty().remove();
		runTestSuite(0);
	};

	hgTest.c = function (fn) {
		callbacks.push(fn);
	};

	hgTest.runCallbacks = function (ms) {
		if (ms) { callbackWait = ms; }
		else { callbackWait = defaultCallbackWait; }
		nextCallback();
	};
})(jQuery, HackerGame);
