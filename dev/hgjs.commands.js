/**

HackerGame

**/
(function ($, hg) {
	var toText = function (input) {
			var output = "";
			console.log("toText", [input]);
			if (typeof(input) === "object") {
				$.each(input, function (_, x) {
					output += hg.t(x) + "\n";
				});
			}
			else { output = input; }
			return output;
		},
		commands = {
			// NETWORK
			"ping": {
				exec: function (loc, num, ttl) {
					var term = this, step, dataString, status, time, 
						responseTime, responseTimeLong, responseTimeShort,
						i = 0,
						timeInSeconds = 1,
						isAvailable = hg.network.ping(loc),
						numOfSuccess = 0,
						timeSuma = 0; 
					console.log("command.ping", [loc, num, ttl]);
					if (! num) { num = 5; }
					if (! ttl) { ttl = 60; }
					responseTimeLong = hg.util.randResponseTime(3, ttl*1000);
					responseTimeShort = hg.util.randResponseTime(3, ttl*10);
					responseTime = function () { 
						return Math.random() > 0.2 ? 
							responseTimeShort() : responseTimeLong();
					};
					time = responseTime();
					term.pause();
					step = function () {
						timeSuma += time;
						var proc, stats, continueStep;
						status = isAvailable && Math.random() > 0.05;
						if (status) { numOfSuccess += 1; }
						
						continueStep = function () {
							dataString = "icmp_seq=" + (i + 1) 
								+ " ttl="+ttl+" time=" 
								+ (status ? (time/1000) : ttl) + " ms";
							hg.tEcho("Pinging " + loc + " ... " + dataString + " " + (status ? "OK" : "LOST"));
							i += 1;
							if (i < num) {
								time = responseTime();
								setTimeout(step, timeInSeconds*1000 + time/1000); 
							}
							else {
								proc = ((num-numOfSuccess)/num*100);
								proc = Math.round(proc * 1000)/1000;
								stats = num + " packets transmited, " + numOfSuccess 
									+ " recieved, " 
									+ proc + "% pacet loss, time " + timeSuma;
								hg.tEcho("\n--- " + loc + " ping statistics ---");
								hg.tEcho(stats);
								term.resume();
							}
						};
						if (!status) {
							time += ttl*1000 - time/1000;
							setTimeout(continueStep, ttl*1000 - time/1000);
						}
						else {
							continueStep();
						}
					};
					setTimeout(step, time/1000);
				},
				help: ["ping - send a ping package to remote computer", 
					   "Usage: ping IP|DOMAIN [NUMBER_OF_PINGS=5 [TIME_TO_LIVE=60]]",
					   "Example: ping localhost",
					   "TIME_TO_LIVE is in seconds.",
					   "Linux: ping"]
			},
			// PASWORD CRACKERS
			"brute": {
				exec: function (pathToFile, num) {
					var fileData = hg.util.getFile(pathToFile), result, special, fails = [],
						charGenerator = function () {
							var chrNum = 97;
							return function () {
								var str = String.fromCharCode(chrNum);
								if (chrNum > 122) { return null; }
								chrNum++;
								return str;
							};
						},
						brute = function (n, str) {
							var i = 0, gen = charGenerator(), chr = gen(), status;
							if (!str) { str = ""; }
							while(chr) {
								if (n > 1) {
									status = brute(n-1, str + chr);
									if (status) { return status; }
								}
								else {
									status = special(str + chr)[0];
									if (status) { 
										fails.push(hg.t("Success") + ": " + str+chr);
										return str + chr;
									}
									fails.push(hg.t("Try") + ": " + str+chr);
								}
								chr = gen();
							}
						};
					console.log("command.brute", [pathToFile, num]);
					if (! num) { num = 0; }
					else { num = parseInt(num, 10); }
					if (fileData !== null) {
						special = hg.util.getSpecialFile(fileData[0] + fileData[1]);
						if (special() !== null) { 
							hg.tEcho("Brute force attack!!!");
							hg.term.pause();
							if (num == 0) {
								num = 1;
								while(!result && num <= 3) {
									result = brute(num);
									
									num++;
								}
							}
							else if (num > 3) {
								hg.tEcho(num + " is too much for this computer. Trying 3 characters ...");
							}
							else {
								result = brute(num);
							}
							if (result) {
								hg.term.echo(hg.t("Password found") + ": " + result);
								hg.term.echo(hg.t("Try") + ": edit " + pathToFile + " " + result);
							}
							else {
								hg.tEcho("Brute force failed.");
							}
							hg.util.setFile("/tmp/brute.log", fails.join("\n"));
							hg.term.echo(hg.t("Log dumped to") + ": /tmp/brute.log");
							hg.term.echo(hg.t("To view use command") + ": edit /tmp/brute.log");
							hg.term.resume();
						}
						else {
							hg.tError("File is not password protected.");
						}
					}
					else {
						hg.tError("File doesn't exist.");
					}
				},
				help: []
			},
			"dict": {
				exec: function (pathToFile) {
					var fileData = hg.util.getFile(pathToFile), 
						result, special, dict = "/etc/dict/passwords",
						passwords = [],
						fails = [];
					console.log("command.dict", [pathToFile]);
					
					if (fileData !== null) {
						special = hg.util.getSpecialFile(fileData[0] + fileData[1]);
						if (special() !== null) { 
							hg.tEcho("Dictionary attack!!!");
							hg.term.pause();
							
							dict = hg.util.getFile(dict);
							if (dict === null) {
								hg.tError("Error: no dictionary file in" + "/etc/dict/passwords");
								hg.term.resume();
								return;
							}
							passwords = dict[2].split("\n");
							$.each(passwords, function (i, pass) {
								if (pass === "") { return; }
								result = special(pass)[0];
								if (! result) {
									fails.push(hg.t("Try") + ": " + pass);
								}
								else {
									fails.push(hg.t("Success") + ": " + pass);
									result = pass;
								}
								return typeof(result) === typeof(false);
							});

							if (result) {
								hg.term.echo(hg.t("Password found") + ": " + result);
								hg.term.echo(hg.t("Try") + ": edit " + pathToFile + " " + result);
							}
							else {
								hg.tEcho("Dictionary attack failed.");
							}
							hg.util.setFile("/tmp/dict.log", fails.join("\n"));
							hg.term.echo(hg.t("Log dumped to") + ": /tmp/dict.log");
							hg.term.echo(hg.t("To view use command") + ": edit /tmp/dict.log");
							hg.term.resume();
						}
						else {
							hg.tError("File is not password protected.");
						}
					}
					else {
						hg.tError("File doesn't exist.");
					}
				},
				help: []
			},
			// FILE SYSTEM
			"cat": {
				exec: function (file) {
					var term = this, contents = hg.util.getFile(file);
					console.log("command.cat", [file]);
					if (contents === null) {
						hg.tError("File doesn't exist.");
						return;
					}
					contents = contents[2];
					if (contents === null) {
						hg.tError("Cannot display binary files.");
					}
					else if (typeof(contents) == "object") {
						hg.tError("Cannot display directory contents.");
					}
					else {
						hg.tEcho(contents);
					}

				},
				help: ["cat - display file contents",
					   "Usage: cat FILE",
					   "Example: cat /etc/hostname",
					   "Linux: cat FILE"]
			},
			"tree": {
				exec: function (dir) {
					var correctPath = dir || hg.state.computer.pwd,
						absPath = correctPath.charAt(0) == "/" ? correctPath : hg.util.absPath(correctPath),
						cleanPath = hg.util.cleanPath(absPath),
						path = hg.util.path(cleanPath),
						term = this,
						start = "/",
						place = hg.state.computer.fs,
						node = function (level) {
							var out = '';
							while (level-- > 0) {
								out += "   ";
							} 
							return out + "`--";
						},
						iterator = function (currPlace, level) {
							$.each(currPlace, function (name, file) {
								type = hg.util.fileType(file);
								hg.tEcho(node(level) + name + " [" + type + "]");
								if (type == "d") {
									iterator(file, level+1);
								}
							});
						};
					console.log("command.tree", [dir]);
					if (path.length > 0) {
						$.each(path, function (i, sub) {
							start = sub;
							place = place[sub] || {};
						});
						if (! place) {
							hg.tError("Directory doesn't exist!");
							return;
						}
					}
					hg.tEcho(start);
					iterator(place, 0);
					
				},
				help: ["tree - see the file hierarchy in the form of a tree",
					   "If no directory is specified, the working directory hierarchy",
					   "is displayed.",
					   "Usage: tree [DIRECTORY]",
					   "Example 1: tree",
					   "Example 2: tree /",
					   "Linux: tree [DIRECTORY]"]
			},
			"ls": {
				exec: function (folder) {
					var dirs = ". ..", place = hg.util.getFile(folder || ".");
					console.log("command.ls", [folder]);
					
					if(! place || typeof(place) != "object") { 
						hg.tError("Directory doesn't exist!");
						return;
					}
					
					$.each(place[2], function (k, _) {
						dirs += " " + k;
					});
					hg.tEcho(dirs);
				},
				help: ["ls - list directory",
					   "Usage: ls [directory]",
					   "Example 1: ls",
					   "Example 2: ls /home",
					   "Linux: ls [directory]"]
			},
			"mkdir": {
				exec: function (folder) {
					var er = hg.state.makeDir(folder);
					console.log("command.mkdir", [folder]);
					if (er) { hg.tError(er); } 
				},
				help: ["mkdir - create a directory in the current directory",
					   "Usage: mkdir directory",
					   "Example: mkdir /tmp/new_directory",
					   "Linux: mkdir dir1, [dir2, [dir3, ...]]"]
			},
			"pwd": {
				exec: function () { 
					console.log("command.pwd", []);
					hg.tEcho(hg.state.computer.pwd); 
				},
				help: ["pwd - path to current directory",
					   "Usage: pwd",
					   "Example: pwd",
					   "Linux: pwd"]
			},
			"cd": {
				exec: function (fold) {
					console.log("command.cd", [fold]);
					if (! fold) { fold = "/home/" + hg.state.computer.properties.user; }
					if (! hg.state.changeDir(fold)) {
						hg.tError(fold + " is not a directory");
					}
				},
				help: ["cd - change directory",
					   "Usage: cd [PATH]",
					   "Example 1: cd ..",
					   "Example 2: cd /home",
					   "Linux: cd path"]
			},
			"rm": {
				exec: function (path) {
					var fullPath = null, 
						last=null, 
						term=this, 
						place=hg.state.computer.fs;
					console.log("command.rm", [path]);
					path = hg.util.path(path);
					if (! path) {
						hg.tError("File or directory doesn't exist!");
					}
					else if (path.length == 0) {
						hg.tError("Cannot remove root directory.");
					}
					else {
						fullPath = hg.util.cleanPath("/" + path.join("/"));
						if (!hg.util.checkFilePermission(fullPath)) {
							hg.tError("You do not have permission");
						}
						else {
							if (! hg.state.removeFile(fullPath)) {
								hg.tError("File or directory doesn't exist.");
							}
						}
					}
				},
				help: ["rm - remove file or directory",
					   "Usage: rm PATH",
					   "Example: rm /tmp/file",
					   "Linux: rm path_to_file OR rmdir path_to_empty_directory"]
			},
			// EDITING
			"edit": {
				help: ["edit - edit file",
					   "Usage: edit FILE [KEY]",
					   "Example: edit /etc/hostname",
					   "Example: edit /tmp/protected thisIsAFilePassword",
					   "Linux: there are many command line programs for editing files,", 
					   "but they are not necessarily installed.",
					   "- joe FILE",
					   "- nano FILE",
					   "- emacs FILE",
					   "- vi FILE",
					   "- vim FILE"],
				exec: function (file, key) {
					console.log("command.edit", [file, key]);
					hg.editor.openCallback = function () {
						hg.editor.focus();
					};
					hg.editor.closeCallback = function () {};
					var response = hg.editor.watch(file, key);
					if (response) {
						hg.tError(response);
					}
					else {
						hg.editor.focus();
					}
				}
			},
			// INTERNAL
			"eval": {
				help: ["eval - execute a JavaScript command", 
					   "Usage: eval COMMAND"]
			},
			"export": {
				help: ["export - store a variable",
					   "Usage: export VARIABLE=VALUE",
					   "Linux: export VARIABLE=VALUE"]
			},
			"sensei": {
				exec: function (input) { 
					console.log("command.sensei", [input]);
					hg.tEcho("Message to sensei sent."); 
				},
				fullArgs: true,
				help: ["sensei - send a message to sensei via secure connection",
					   "Usage: sensei MESSAGE",
					   "Example: sensei Hello sensei, how are you?"]
			},
			"echo": {
				exec: function (input) { 
					console.log("command.echo", [input]);
					if (input) { hg.tEcho(input); }
				},
				fullArgs: true,
				help: ["echo - print text in terminal", 
					   "Usage: echo TEXT",
					   "Example: echo Hello!",
					   "Linux: echo TEXT"]
			},
			"help": {
				exec: function(command) {
					var blackList = hg.state.computer.properties.commandBlackList;
					console.log("command.help", [command]);
					if (!command) {
						hg.tEcho("Available commands: ");
						$.each(commands, function (cmnd, props) {
							if ($.inArray(cmnd, blackList) > -1) {
								return;
							}
							hg.tEcho(props.help[0]);
						});
						hg.tEcho("\nFor more information type: help COMMAND");
					}
					else if (commands[command]){
						hg.term.echo(toText(commands[command].help));
					}
					else {
						hg.tError("No information on command " + command);
					}
				},
				help: ["help - display help information", 
					   "Usage: help [COMMAND]",
					   "Example 1: help",
					   "Example 2: help ls",
					   "Linux: man or COMMAND -h or COMMAND --help"]
			}
		};
	hg.commandCompletion = function (term, string, fn) {
		var candidates = [];
		console.log("commandCompletion", [term, string, fn]);
		// Commands
		$.each(commands, function (cmnd, _) {
			if (cmnd.substr(0, string.length) == string) {
				candidates.push(cmnd);
			}
		});

		// Folders and files
		$.each(hg.state.place, function (file, _) {
			if (file.substr(0, string.length) == string) {
				candidates.push(file);
			}
		});
		
		fn(candidates);
	};
	hg.initComputerCommands = function (computer) {
		console.log("initComputerCommands", [computer]);
		$.each(commands, function (name, _) {
			computer.fs.bin[name] = null;
		});
	};
	
	hg.exec = function(input, term) {
		var segments = hg.util.parseInput(input),
			fn = segments[0],
			argsString = segments[1],
			args = segments[2],
			argsStringRaw = segments[3],
			result,
			noError = true,
			callbackResult;
		console.log("exec", [input, term]);
		if (args === null) {
			term.error(hg.t("Parse error") + ": " + argsStringRaw);
		}
		else if ($.inArray(fn, hg.state.computer.properties.commandBlackList) > -1) {
			noError = false;
			hg.tError("Command is not defined!");
		}
		else if (commands[fn] && commands[fn].exec) {
			if (commands[fn].fullArgs) { result = commands[fn].exec.call(term, argsString); }
			else { result = commands[fn].exec.apply(term, args); }
		}
		else if(fn === "eval" || fn === "export") {
			if (argsStringRaw) {
				try {
					result = window.eval(argsStringRaw);	
					hg.tEcho(new String(result));
				} catch(e) {
					hg.tError(new String(e));
            	}
			}
		}
		else if (input != '') {
			noError = false;
			hg.tError("Command is not defined!");
		}
		if (input != '' && hg.assignment && hg.assignment.currentTask >= 0 && hg.assignment.evaluate) {
			// Callback is the main task checker.
			// If the input passes the callback
			// You can move to the next task
			callbackResult = hg.assignment.evaluate.call(term, {
				input: input,
				command: fn,
				argsString: argsString,
				args: args,
				noError: noError,
				
			});
			if (callbackResult) {
				hg.assignment.nextTask();
			}
		}
		
	};
})(jQuery, HackerGame);

