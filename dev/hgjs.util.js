
/*

HackerGame

*/
(function ($, hg) {
	var notValidIP = [10,127,254,255,1,2,169,172,192], // not vaild first ip numbers
		randIntGenerator = function (from, to) { // random integer generator
			console.log("randIntGenerator", [from, to]);
			if (!from) { from = 0; }
			if (!to) { to = 1; }
			return function () { return Math.round(Math.random()*(to-from)+from); };
		},
		fileTypes = { // possible file types
			"null": "b", 
			"object": "d",
			"string": "t"
		},
		fileTypesLong = { // long filetypes names
			"b": "binary",
			"d": "directory",
			"t": "text"
		};
	/**
	 * hg.util.randomChoice (array)
	 * - array : array
	 * 
	 * Return a random value in array.
	 **/
	hg.util.randomChoice = function(array) {
		var rand = randIntGenerator(0, array.length-1)();
		return array[rand];
	};


	/**
	 * hg.util.randomString (length, [lower])
	 * - length : int - length of random string
	 * - lower : boolean - if true, only lower letters
	 *
	 * Generate a random string.
	 **/
	hg.util.randomString = function(length, lower) {
		var genInt = randIntGenerator(0, 25), 
			genBool = randIntGenerator(0, 1),
			string = "", chr = "";

		while(length-- > 0) {
			chr = String.fromCharCode(97 + genInt());
			if (!lower && genBool() > 0) {
				chr = chr.toUpperCase();
			}
			string += chr;
		}
		return string;
	};
	
	/**
	 * hg.util.extend (default, over)
	 * - default : object - default object that gets overwritten
	 * - over : object - overwritting object
	 *
	 * Return: object
	 *
	 * This utility behaves a lot like $.extend but if it detects that both
	 * default[key] and over[key] are objects, it will recursively call itself
	 * upon them. 
	 */
	hg.util.extend = function (objDef, objOver) { 
		// TODO: check if you can replace with native jQuery's
		var obj = {};
		console.log("util.extend", [objDef, objOver]);
		$.each(objDef, function (key, _) {
			if (! objOver[key]) {
				obj[key] = objOver[key] !== undefined ? objOver[key] : objDef[key];
			}
			else if (typeof(objDef[key]) == "object" && typeof(objOver[key]) == "object") {
				obj[key] = hg.util.extend(objDef[key], objOver[key]);
			}
			else  {
				obj[key] = objOver[key];
			}
		});
		return obj;
	};

	/**
	 * hg.util.parseInput (input)
	 * - input : string - user input from command line
	 * 
	 * Return: array
	 *
	 * Parse user input and return: [command, argsStr, args, rawArgsString]
	 * - command : string - user command
	 * - argsStr : string - parsed arguments as a string (removing ' and " )
	 * - args : array - parsed argumetns as array
	 * - rawArgsString : string - same as argsString but unprocessed
	 */
	hg.util.parseInput = function (input) {
		var segments = input.match(/(\w+) *(.*)/),
			argsString = "",
			rawArgsString = "",
			args = [],
			i = 0,
			n = 0,
			from = 0,
			to = 0,
			sep = null,
			chr,
			parseArg = function (trim) {
				// trim spaces before from
				while (trim && argsString.charAt(from) == ' ') {
					from++;
				}
				
				args.push(argsString.substring(from, to));
				from = to + 1;
				if (from > n) { from = n; }
				sep = null;
			},
			command = null;
		if (segments !== null) {
			command = segments[1];
			argsString = segments[2];
			n = argsString.length;

			while (i < n) {
				chr = argsString.charAt(i);
				to = i;
				if (chr == '\'' || chr == '"') { // char can be a seperator
					if (sep) {
						if (chr === sep) { // seperator close
							parseArg();
							i = i+1; // jump over
						}
						// else do nothing: chr is just a char between two seperators
					}
					else { // seperator start
						sep = chr;
						from = i + 1;
					}
				}
				else if (!sep && chr == ' ') {
					parseArg(true);
				}
				i++;
			}
			if (sep) {
				// This must not happen, if the input is false
				// report to calling function
				return [command, null, null, argsString];
			}
			if (argsString.length == 1) {
				return [command, argsString, [argsString], argsString];
			}
			if (from < i && from <= to) {
				to = i;
				parseArg(true);
			}
			rawArgsString = argsString;
			argsString = args.join(" ");
		}
		else { 
			command = input;
		}
		return [command, argsString, args, rawArgsString];
	};


	/**
	 * hg.util.randIP ()
	 * 
	 * Return: string
	 *
	 * Generate random IP address.
	 */
	hg.util.randIP = function () {
		var generator = randIntGenerator(1,255), first = generator();
		console.log("util.randIp", []);
		while ($.inArray(first, notValidIP) > -1) { first = generator(); }
		return [first, generator(), generator(), generator()].join(".");
	};

	/**
	 * hg.util.randResponseTime (from, to)
	 * - from : integer
	 * - to : integer
	 * 
	 * Return: function
	 *
	 * Return generator for random response time.
	 */
	hg.util.randResponseTime = function(from, to) {
		console.log("util.randResponseTime", [from, to]);
		return randIntGenerator(from, to);
	};

	/**
	 * hg.util.fileType (file, [longName])
	 * - file: mixed - file content
	 * - longName : boolean - if true, long filetype name will be returned
	 *
	 * Return: string
	 *
	 * Return filetype with respect to file content.
	 * Types:
	 * - b: binary ( can also be special! )
	 * - d: directory
	 * - t: text
	 */
	hg.util.fileType = function (file, longName) {
		var type = (file === null && fileTypes["null"]) || fileTypes[typeof(file)];
		console.log("util.fileType", [file, longName]);
		return longName ? fileTypesLong[type] : type;
	};

	/**
	 * hg.util.path = function ([rawPathString])
	 * - rawPathString : string - raw path (relative, absolute ... )
	 *
	 * Return: array - path array
	 * 
	 * Return path array. If rawPathString isn't specified, PWD will be used.
	 * Absolute path is prepended automatically.
	 * Example: /one/two -> ['one', 'two']
	 */
	hg.util.path = function (rawPathString) {
		var ret = null,
			pathString = (rawPathString && 
						  (rawPathString.charAt(rawPathString.length-1) == "/" ? // remove last /
						   rawPathString.substr(0, rawPathString.length-1) : rawPathString)) 
				|| null,
			pwdPath = hg.state.computer.pwd.split("/").slice(1),
			path = (pathString && pathString.split("/")) || [];
		console.log("util.path", [rawPathString]);

		if (hg.state.computer.pwd == "/") { pwdPath = []; }
		if (rawPathString == "/" || pathString == "/" || (!pathString && hg.state.computer.pwd == "/")) {
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

	/**
	 * hg.util.checkFilePermission (absPath, [totalTest])
	 * - absPath : string - absolute path to file
	 * - totalTest : boolean - if true, path will be cleand and if relative, changed to absolute
	 * Return: boolean
	 *
	 * Check if wile is writtable.
	 */
	hg.util.checkFilePermission = function (absPath, totalTest) {
		console.log("util.checkFilePermission", [absPath, totalTest]);
		if (totalTest) {
			if (absPath.charAt(0) != "/") {
				absPath = hg.util.absPath(absPath);
			}
			absPath = hg.util.cleanPath(absPath);
			return hg.util.checkFilePermission(absPath);
		}
		if (typeof(absPath) != "string" || absPath.charAt(0) !== "/") {
			console.log("util.checkFilePermission needs an absolute path!");
			return null;
		}
		return $.inArray(absPath, [
			"/",
			"/bin",
			"/home"
		]) == -1;
	};

	/**
	 * hg.util.fileExists (loc)
	 * - loc : string - location of file (filepath)
	 *
	 * Return: boolean
	 *
	 * Check if file exists. Note: directory is also a file!
	 */ 
	hg.util.fileExists = function (loc) {
		var ret = false;
		console.log("util.fileExists", [loc]);
		hg.util.pathIterator(loc, function (obj) {
			ret = obj !== undefined;
		});
		return ret;
	};

	/**
	 * hg.util.isDir (dir)
	 * - dir : string - directory filepath
	 * 
	 * Return: boolean
	 * 
	 * Check if file is directory. If file doesn't exists, false is returned
	 */
	hg.util.isDir = function (dir) {
		var ret = false;
		console.log("util.isDir", [dir]);
		hg.util.pathIterator(dir, function (obj) {
			ret = typeof(obj) == "object" && obj !== null;
		});
		return ret;
	};

	/**
	 * hg.util.absPath (path)
	 * - path : string - relative path to file
	 * 
	 * Return: string
	 * 
	 * Create absolute path to file (this is a straightforward and stupid method, it just
	 * prepends PWD. Note: no checking if path is already absolute is done.
	 */
	hg.util.absPath = function (path) {
		console.log("util.absPath", [path]);
		return hg.state.computer.pwd + (hg.state.computer.pwd == "/" ? "" : "/") + path;
	};

	/**
	 * hg.util.cleanPath (path)
	 * - path : string - absolute or relative path
	 *
	 * Return: string
	 *
	 * Return cleaned path. Example: /one/two/../two2 -> /one/two2
	 */
	hg.util.cleanPath = function (path) {
		var returnPath = [], emptyPath, isAbs = path.charAt(0) == "/";
		console.log("util.cleanPath", [path]);
		if (path == "/") { return "/"; }
		if (path == ".") { return ""; }
		if (path.charAt(path.length - 1) == "/") { path = path.substr(0, path.length - 1); }
		$.each(path.split("/"), function (i, elt) {
			if (elt == ".") { return; }
			
			if (elt == "..") { 
				returnPath.pop(); 
				if (isAbs && returnPath.length == 0) { returnPath.push(""); }
			}
			else if(elt || i == 0) { returnPath.push(elt); }
		});

		emptyPath = returnPath.length == 0 || (returnPath.length == 1 && !returnPath[0]);
		return emptyPath ? "/" : returnPath.join("/");
	};

	/**
	 * hg.util.pathIterator (dir, fn)
	 * - dir : string : directory to iterate to
	 * - fn : function - callback
	 *
	 * Return: boolean
	 *
	 * Iterate trough path and call the callback function on the last
	 * directory that was iterated. Return true if everything OK, else false.
	 */
	hg.util.pathIterator = function (dir, fn) {
		var path = hg.util.path(dir),
			res = null,
			place = [hg.state.computer.fs],
			iterator = function (i) {
				console.log("util.fileExists:iterator", [i]);
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
							if (place[place.length-1] === undefined) {
								return false;
							}
							place.push(place[place.length-1][path[i]]);
						}
						iterator(i+1);
					}
				}
				else { fn(place[place.length-1]); }
			};
		console.log("util.pathIterator", [dir, fn]);
		if (path.length == 0) { fn(place[place.length-1]); }
		else if (path) { iterator(-1); }

		return true;
	};

	/**
	 * hg.util.getSpecialFile (path)
	 * - path : string - ABSOLUTE path to special file
	 *
	 * Return: function
	 *
	 * Get special file. If no special file exists, a function that when called
	 * returns null is generated.
	 */
	hg.util.getSpecialFile = function (path) {
		console.log("util.getSpecialFile", [path]);
		return hg.state.computer.dfs[path] || function () { return null; };
	};

	/**
	 * hg.util.getFilenameFilepath (pathToFile)
	 * - pathToFile : string - path to some file
	 * 
	 * Return: array
	 *
	 * Function cleans the path and returns the path to file and filename in array.
	 * Example 1: /home/user/file -> ['/home/user/', 'file']
	 * Example 2: / -> ['/', '']
	 */
	hg.util.getFilenameFilepath = function (pathToFile) {
		var filename, filePath;
		console.log("util.getFilenameFilepath", pathToFile);
		if (pathToFile == "/") {
			return ["/", ""];
		}

		if (pathToFile.charAt(0) != "/") {
			pathToFile = hg.util.absPath(pathToFile);
		}
		pathToFile = hg.util.cleanPath(pathToFile);
		
		pathToFile = pathToFile.split("/");
		
		filename = pathToFile[pathToFile.length - 1];
		pathToFile = pathToFile.slice(0, pathToFile.length - 1);
		filePath = pathToFile.join("/");
		return [filePath, filename];
	};

	/**
	 * hg.util.getFile (pathToFile)
	 * - pathToFile : string - path to file
	 *
	 * Return: array|null
	 *
	 * Gets the specified file in a informative way. The output array is:
	 * [dirPath, fileName, fileContent, fileType]
	 * - dirPath: path to containing directory
	 * - fileName: filename of file in DirPath
	 * - fileContent: contents of file
	 * - fileType: file type of file
	 * If file doesn't exits or path is incorrect, null is returned.
	 */
	hg.util.getFile = function (pathToFile) {
		var filename, dir, status, filePath, content;
		console.log("util.getFile", [pathToFile]);
		if (!pathToFile) { return null; }
		
		filePath = hg.util.getFilenameFilepath(pathToFile);
		filename = filePath[1];
		filePath = filePath[0];
		if (filePath == "/" && filename == "")
		{
			return [filePath, filename, 
					hg.state.computer.fs, hg.util.fileType(hg.state.computer.fs)];
		}
		
		if (! filePath) { filePath = "/"; }
		
		status = hg.util.pathIterator(filePath, function (lastDir) {
			dir = lastDir;
		});

		if (status && dir) {
			if (!filename) {
				return [filePath, "", dir, hg.util.fileType(dir)];
			}
			if (dir[filename] !== undefined) {
				content = dir[filename];
				
				return [filePath + (filePath.charAt(filePath.length - 1) == "/" ? "" : "/"), filename, content, hg.util.fileType(content)];
			}
		}

		return null;
	};

	/**
	 * hg.util.setFile (pathToFile, content)
	 * - pathToFile : string - pat to file to set (can be a new file)
	 * - content : mixed - content of the new file
	 * 
	 * Return: boolean
	 * 
	 * Sets new file content if path to file exists and return true. If not, false is returned.
	 */
	hg.util.setFile = function (pathToFile, content) {
		var filename, dir, status, filePath;
		console.log('util.setFile', [pathToFile, content]);
		if (pathToFile.charAt(0) != "/") {
			pathToFile = hg.util.absPath(pathToFile);
		}
		pathToFile = hg.util.cleanPath(pathToFile);
		
		if (!hg.util.checkFilePermission(pathToFile)) {
			return null; // not allowed
		}
		pathToFile = pathToFile.split("/");
		
		filename = pathToFile[pathToFile.length - 1];
		pathToFile = pathToFile.slice(0, pathToFile.length - 1);
		filePath = pathToFile.join("/");

		if (!filePath) { filePath = "/"; }
		
		status = hg.util.pathIterator(filePath, function (lastDir) {
			dir = lastDir;
		});
		if (status && dir) {
			dir[filename] = content;
			hg.state.computer.hasChanged = true;
			if (! hg.util.fileExists(hg.state.computer.pwd)) {
				// If something happens to PWD, go to root
				hg.state.changeDir("/");
			}
			return true;
		}
		return false;
	};

	// ===================
	// jQuery util plugins
	// ===================
	/**
	 * jQuery: .hgBlink ([numOfBlinks, [time]])
	 * - numOfBlinks : integer - number of blinks
	 * - time : integer - time between blinks
	 * 
	 * jQuery plugin for DOM element blinking.
	 *
	 */
	$.fn.hgBlink = function (numOfBlinks, time) {
		console.log("$.fn.hgBlink", [numOfBlinks, time]);
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
