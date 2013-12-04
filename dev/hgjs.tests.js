hgTest = {};

var tests = [
	"simple", "util", "state",
	"ass-intro"
];

(function ($, hg) {
	var $li = $(document.createElement("li")), 
		i = 0,
		finish = function () {},
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
		i += 1;
		runTestSuite(i);
	};
	
	hgTest.run = function () {
		$("#qunit,#qunit-fixture").show();
		$li.empty().remove();
		runTestSuite(0);
	};
})(jQuery, HackerGame);
