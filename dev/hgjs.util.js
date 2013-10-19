/**

HackerGame

**/
(function ($, hg) {
	var notValidIP = [10,127,254,255,1,2,169,172,192],
		randIntGenerator = function (from, to) {
			return function () { return Math.round(Math.random()*(to-from)+from); };
		};
	hg.util.randIP = function () {
		var generator = randIntGenerator(1,255), first = generator();
		while ($.inArray(first, notValidIP)) { first = generator(); }
		return [first, generator(), generator(), generator()].join(".");
	}
})(jQuery, HackerGame);
