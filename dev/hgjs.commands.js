/**

HackerGame

**/
(function ($, hg) {
	var toText = function (input) {
			var output = "";
			if (typeof(input) === "object") {
				$.each(input, function (_, x) {
					output += x + "\n";
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
							term.echo("Pinging " + loc + " ... " + dataString + " " + (status ? "OK" : "LOST"));
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
								term.echo("\n--- " + loc + " ping statistics ---");
								term.echo(stats);
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
					   "TIME_TO_LIVE is in seconds.",
					   "Linux: ping"]
			},
			// FILE SYSTEM
			"ls": {
				exec: function (folder) {
					var dirs = ". ..";
					hg.util.pathIterator(folder, function (contents) {
						if ($.isPlainObject(contents)) {
							$.each(contents, function (k, _) {
								dirs += " " + k;
							});
						}
					});
					this.echo(dirs);
				},
				help: ["ls - list directory",
					   "Usage: ls [directory]",
					   "Linux: ls [directory]"]
			},
			"mkdir": {
				exec: function (folder) {
					var er = false;
					hg.util.pathIterator(null, function (cont) {
						if (cont[folder]) {
							er = "Directory already exists!";
						}
						else if (/[\/\\ ]+/.test(folder)) { er = "Not a valid name"; }
						else if (/^\./.test(folder)) { er = "First char cannot be dor (.)"; }
						else {
							cont[folder] = {};
						}
					});
					if (er) { this.error(er); } 
				},
				help: ["mkdir - create a directory in the current directory",
					   "Usage: mkdir directory",
					   "Linux: mkdir dir1, [dir2, [dir3, ...]]"]
			},
			"pwd": {
				exec: function () { this.echo(hg.state.computer.pwd); },
				help: ["pwd - path to current directory",
					   "Usage: pwd",
					   "Linux: pwd"]
			},
			"cd": {
				exec: function (fold) {
					var foldName = fold;
					if (fold.charAt(0) != "/") {
						fold = hg.util.absPath(fold);
					}
					if (hg.util.isDir(fold)) {
						hg.state.computer.pwd = hg.util.cleanPath(fold);
						if (hg.state.computer.pwd.length == 0) {
							hg.state.computer.pwd = "/";
						}
					}
					else { this.echo(foldName + " is not a directory"); }
				},
				help: ["cd - change directory",
					   "Usage: cd path",
					   "Linux: cd path"]
			},
			"rm": {
				exec: function (path) {
					var fullPath = null, last=null;
					path = hg.util.path(path);
					if (! path) {
						term.error("File or directory doesn't exist!");
					}
					else if (path.length == 0) {
						term.error("Cannot remove root directory.");
					}
					else {
						fullPath = hg.util.cleanPath(path.join("/"));
						if (!hg.util.checkFilePermission(fullPath)) {
							term.error("You do not have permission");
						}
						else {
							last = path[path.length -1];
							$.each(path, function (i, obj) {
								if (i == path.length -2) {
									if (obj[last]) { delete obj[last]; }
									else {
										term.error("File or directory doesn't exist.");
									}
								}
							});
							if (!hg.util.fileExists(hg.state.computer.pwd)) {
								hg.state.computer.pwd = "/";
							}
						}
					}
				},
				help: ["rm - remove file or directory",
					   "Usage: rm path",
					   "Linux: rm path_to_file OR rmdir path_to_empty_directory"]
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
			"help": {
				exec: function(command) {
					var term = this,
						blackList = hg.state.computer.properties.commandBlackList;
					if (!command) {
						this.echo("Available commands: ");
						$.each(commands, function (cmnd, props) {
							if ($.inArray(cmnd, blackList) > -1) {
								return;
							}
							term.echo(props.help[0]);
						});
						this.echo("\nFor more information type: help COMMAND");
					}
					else if (commands[command]){
						this.echo(toText(commands[command].help));
					}
					else {
						this.error("No information on command " + command);
					}
				},
				help: ["help - display help information", 
					   "Usage: help COMMAND",
					   "Linux: man or COMMAND -h or COMMAND --help"]
			}
		};
	hg.commandCompletion = function (term, string, fn) {
		var candidates = [];
		$.each(commands, function (cmnd, _) {
			if (cmnd.substr(0, string.length) == string) {
				candidates.push(cmnd);
			}
		});
		fn(candidates);
	};
	hg.exec = function(input, term) {
		var segments = input.split(" "),
			fn = segments[0],
			result,
			noError = true,
			attributes = segments.length > 1 ? segments.slice(1) : null;
		if ($.inArray(fn, hg.state.computer.properties.commandBlackList) > -1) {
			noError = false;
			term.error("Command is not defined!");
		}
		else if (commands[fn] && commands[fn].exec) {
			commands[fn].exec.apply(term, attributes);
		}
		else if(fn === "eval" || fn === "export") {
			if (attributes) {
				try {
					result = window.eval(attributes.join(" "));
					if (result !== undefined) {
						term.echo(new String(result));
					}
				} catch(e) {
					term.error(new String(e));
            	}
			}
		}
		else {
			noError = false;
		}
		if (noError && hg.assignment.evaluate) {
			// Callback is the main task checker.
			// If the input passes the callback
			// You can move to the next task
			var callbackResult = hg.assignment.evaluate.call(term, input),
				status;
			if (callbackResult) {
				status = hg.assignment.nextTask();
				if (! status) {
					hg.state.assignment.complete();
				}
			}
		}
		
	};
})(jQuery, HackerGame);

