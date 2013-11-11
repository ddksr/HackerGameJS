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
		var ret = null,
			pwdPath = hg.state.computer.pwd.split("/").slice(1),
			path = (pathString && pathString.split("/"))
			|| (hg.state.computer.pwd && pwdPath) || null;
		if (! path[path.length -1]) { path.pop(); }
		if (pathString == "/") {
			ret = [];
		}
		else if (path) {
			// chechk if pathString is absolute path
			ret = !path[0] ? path.slice(1) : pwdPath.concat(path);
		}
		return ret;
	};
	hg.util.fileExists = function () {
		var ret = false;
		hg.util.pathIterator(dir, function (obj) {
			ret = obj;
		});
		return ret;
	};
	hg.util.isDir = function (dir) {
		var ret = false;
		hg.util.pathIterator(dir, function (obj) {
			ret = $.isPlainObject(obj); // TODO: ne dela, popravi
		});
		return ret;
	};
	hg.util.cleanPath = function (path) {
		var returnPath = [];
		$.each(path.split("/"), function (_, elt) {
			if (elt == ".") { return; }
			if (elt == "..") {
				returnPath.pop();
			}
			else { returnPath.push(elt); }
		});
		return returnPath.length == 0 ? "/" : returnPath.join("/");
	};
	hg.util.pathIterator = function (dir, fn) {
		var path = hg.util.path(dir),
			res = null,
			prevPlace = hg.state.computer.fs,
			place = hg.state.computer.fs,
			iterator = function (i) {
				if (i < path.length) {
					if (i == -1 || path[i] == ".") { 
						iterator(i+1); 
					}
					else {
						if (path[i] == "..") {
							place = prevPlace;
						}
						else { place = place[path[i]]; }
						iterator(i+1);
					}
				}
				else { fn(place); }
			};
		
		if (path && path.length == 0) { fn(place); }
		else if (path) { iterator(-1); }
	};
})(jQuery, HackerGame);
