/**

HackerGame

**/
(function ($, hg) {
	var toText = function (input) {
			var output = "";
			if (typeof input == "object") {
				$.each(input, function (_, x) {
					output += x + "\n";
				});
			}
			else {
				output = input;
			}
			return output;
		},
		commands = {
		ping: {
			exec: function (loc, num, timeInSeconds) {
				var term = this, step, isAvailable = hg.network.ping(loc);
				if (! num) { num = 5; }
				if (! timeInSeconds) {
					timeInSeconds = 1;
				}
				step = function () {
					term.echo("Pinging " + loc + " ... OK");
					num -= 1;
					if (num > 0) { 
						setTimeout(step, timeInSeconds*1000); 
					}
				};
				step();
			},
			help: [
				"PING command for pinging remote computers", 
				"Usage: ping IP|DOMAIN [NUMBER_OF_PINGS [TIME]]",
				"TIME is in seconds."
			]
		},
		help: {
			exec: function(command) {
				if (!command) {
					this.echo(toText(commands.help.help));
				}
				else {
					this.echo(toText(commands[command].help));
				}
			},
			help: "Usage: help COMMAND"
		}
	};
	hg.exec = function(input, term) {
		var segments = input.split(" "),
			fn = segments[0],
			attributes = segments.length > 1 ? segments.slice(1) : null;
		if (commands[fn]) {
			commands[fn].exec.apply(term, attributes);
		}
		else {
			if (command !== '') {
				try {
					var result = window.eval(command);
					if (result !== undefined) {
						term.echo(new String(result));
					}
				} catch(e) {
					term.error(new String(result));
            	}
			}
		}
		if (hg.callback) {
			// Callback is the main task checker.
			// If the input passes the callback
			// You can move to the next task
			var callbackResult = hg.callback.call(term, input),
				status;
			if (callbackResult) {
				status = hg.state.assignment.nextTask();
				if (! status) {
					hg.state.assignment.completeAssignment();
				}
			}
		}
	};
})(jQuery, HackerGame);

