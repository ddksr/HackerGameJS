/**

HackerGame

**/
(function ($, hg) {
	var notValidIP = [10,127,254,255,1,2,169,172,192],
		randIntGenerator = function (from, to) {
			if (!from) { from = 0; }
			if (!to) { to = 1; }
			return function () { return Math.round(Math.random()*(to-from)+from); };
		};
	hg.util.randIP = function () {
		var generator = randIntGenerator(1,255), first = generator();
		while ($.inArray(first, notValidIP) > -1) { first = generator(); }
		return [first, generator(), generator(), generator()].join(".");
	};
	hg.util.randResponseTime = function(from, to) {
		return randIntGenerator(from, to);
	};
	hg.util.path = function (pathString) {
		var path = (pathString && pathString.split("/"))
			|| (hg.state.computer.pwd && hg.state.pwd.split("/"))
			|| null;

		return (path && path.slice(1)) || null;
	};
	hg.util.fileExists = function () {
		return hg.util.pathIterator(dir, function (obj) {
			return obj;
		});		
	};
	hg.util.isDir = function (dir) {
		return hg.util.pathIterator(dir, function (obj) {
			return obj && $.isPlainObject(obj);
		});
	};
	hg.util.pathIterator = function (dir, fn) {
		var path = hg.util.path(dir),
			res = null,
			place = hg.state.computer.fileSystem,
			iterator = function (i) {
				place = place[path[i]];
				if (i < path.length) { iterator(i+1); }
				else { res = fn(place); }
			};
		if (path) { iterator(0); }
		else { res = fn(dir); }
		return res;
	};
})(jQuery, HackerGame);
