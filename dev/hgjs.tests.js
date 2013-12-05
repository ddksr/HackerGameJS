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
		specificCallbackWait = {},
		finish = function () {
			alert("Tests finished!");
		},
		callbacks = [],
		nextCallback = function () {
			callbacks[iCallback].call(null);
			iCallback += 1;

			if (iCallback >= callbacks.length) {
				callbacks = [];
				iCallback = 0;
				start();
				hgTest.next();
			}
			else {
				setTimeout(function () {
					nextCallback();
				}, specificCallbackWait[iCallback] || callbackWait);
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
		iTest = 0;
		runTestSuite(0);
	};

	hgTest.addCallback = function (fn, ms) {
		callbacks.push(fn);
		specificCallbackWait[callbacks.length - 1] = ms;
	};

	hgTest.runCallbacks = function (ms) {
		if (ms) { callbackWait = ms; }
		else { callbackWait = defaultCallbackWait; }
		iCallback = 0;
		if (callbacks.length > 0) {
			setTimeout(function () {
				nextCallback();
			}, specificCallbackWait[iCallback] || callbackWait);
		}
	};

})(jQuery, HackerGame);
