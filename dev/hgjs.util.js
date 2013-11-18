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
	hg.util.path = function (rawPathString) {
		var ret = null,
			pathString = (rawPathString && 
						  (rawPathString.charAt(rawPathString.length-1) == "/" ? 
						   rawPathString.substr(0, rawPathString.length-1) : rawPathString)) 
				|| null,
			pwdPath = hg.state.computer.pwd.split("/").slice(1),
			path = (pathString && pathString.split("/")) || [];
		if (hg.state.computer.pwd == "/") { pwdPath = []; }
		if (pathString == "/" || (!pathString && hg.state.computer.pwd == "/")) {
			ret = [];
		}
		else if (path) {
			if (pathString && pathString.charAt(0) == "/") {
				// absolute path
				ret = path.slice(1);
			}
			else if (!pathString) {
				// no rawPathString, just add pwdPath
				ret = pwdPath;
			}
			else {
				// combine current path (pwd) with path string
				ret = pwdPath.concat(path);
			}
		}
		return ret;
	};
	hg.util.checkFilePermission = function (path) {
		return $.inArray(path, [
			"/",
			"/bin",
			"/home"
		]) == -1;
	};
	hg.util.fileExists = function (loc) {
		var ret = false;
		hg.util.pathIterator(loc, function (obj) {
			ret = obj;
		});
		return ret;
	};
	hg.util.isDir = function (dir) {
		var ret = false;
		hg.util.pathIterator(dir, function (obj) {
			ret = typeof(obj) == typeof({});
		});
		return ret;
	};
	hg.util.absPath = function (path) {
		return hg.state.computer.pwd + (hg.state.computer.pwd == "/" ? "" : "/") + path;
	};
	hg.util.cleanPath = function (path) {
		var returnPath = [];
		$.each(path.split("/"), function (i, elt) {
			if (elt == ".") { return; }
			if (elt == "..") { returnPath.pop(); }
			else if(elt || i == 0) { returnPath.push(elt); }
		});

		return returnPath.length == 0 ? "/" : returnPath.join("/");
	};
	hg.util.pathIterator = function (dir, fn) {
		var path = hg.util.path(dir),
			res = null,
			place = [hg.state.computer.fs],
			iterator = function (i) {
				if (i < path.length) {
					if (i == -1 || path[i] == ".") { 
						iterator(i+1); 
					}
					else {
						if (path[i] == "..") {
							place.pop();
							if (place.length == 0) {
								place = [hg.state.computer.fs];
							}
						}
						else { 
							place.push(place[place.length-1][path[i]]);
						}
						iterator(i+1);
					}
				}
				else { fn(place[place.length-1]); }
			};
		if (path.length == 0) { fn(place[place.length-1]); }
		else if (path) { iterator(-1); }
	};

	// ===================
	// jQuery util plugins
	// ===================
	$.fn.hgBlink = function (numOfBlinks, time) {
		if (!numOfBlinks) { numOfBlinks = 3; }
		if (!time) { time = 500; }
		$(this).each(function (i, elt) {
			var blink = function (n) {
				if (n > 0) { 
					$(elt).hide(0, function() {
						$(elt).fadeIn(time, function () { 
							blink.call(elt, n-1);
						});
					});
				}
			};
			blink(numOfBlinks);
		});
		return this;
	};
})(jQuery, HackerGame);
