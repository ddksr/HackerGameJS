/*

HackerGame

*/
(function ($, hg) {
	var addresses = { // address table which returns computers name on a address
			"127.0.0.1": function () { return hg.state.computer.name; }
		}, 
		dnsTable = {  // this is the hostname table
			localhost: "127.0.0.1" 
		}, 
		defaultFs = { // this is the default filesystem passed to every computer
			"bin": {},
			"home": {},
			"dev": {},
			"tmp": {},
			"etc": {
				"brute": {},
				"dict": { "passwords": "password\npassword1234\n123456789"}
			}
		},
		defaultDynFs = { // this is the default DFS passed to every computer
			
		},
		computers = { // This is the computers array
			// Define computers here in format location: { ... properties ... }
			"-": {
				hostname: "my-machine",
				localIP: "192.168.1.2",
				user: "me",
				externalIP: null,
				visibleFrom: null,
				domain: null,
				commandBlackList: {},
				fs: {},
				dfs: {} // binary files can have 
			}
		};
	// initialize computers, IP map and DNS table
	$.each(computers, function (name, props) {
		var randomIP;
		if (! props.visibleFrom) {
			do {
				randomIP = hg.util.randIP();
			} while (addresses[randomIP]);
			addresses[randomIP] = name;
			computers[name].externalIP = randomIP;
			if (props.domain) {
				dnsTable[prop.domain] = randomIP;
			}
		}
		else {
			addresses[visibleFrom + ">" + props.localIP] = name;
		}

		// Add special
		computers[name].fs = hg.util.extend($.extend(true, {}, defaultFs), 
											computers[name].fs);
		if (!computers[name].fs.home[props.user]) { 
			computers[name].fs.home[props.user] = {};
		}

		$.each(defaultDynFs, function (path, fn) { computers[name].dfs[path] = fn; });
		computers[name].fs.etc.hostname = props.hostname;
	});

	/**
	 * hg.cons.Computer (name, isDefault)
	 * - name : string - computer name
	 * - isDefault : boolean - is default computer?
	 * 
	 * Constructor for Computer object.
	 * Fields:
	 * - name : string - computer name
	 * - isDefault : boolean - is default computer
	 * - location : string - local ip address
	 * - pwd : string - current working directory
	 * - hasChanged : boolean - has filesystem changed (important for dumping)
	 * - fs : object - computer file system
	 * - dfs : object - computer dynamic file system
	 * - properties : object - all computer properties in a object
	 *   - hostname : string - computer hostname
	 *   - localIP : string - computer local IP adress 192.168.1.2
	 *   - user: : string - default computer user
	 *   - externalIP (NOT USED)
	 *   - visibleFrom (NOT USED)
	 *   - domain (NOT USED)
	 *   - commandBlackList : object - blacklisted commands
	 */
	hg.cons.Computer = function Computer (name, isDefault) {
		var props = {};
		console.log("new Computer", [name, isDefault]);
		if (! name) { name = "-"; }
		if (! computers[name]) { return null; }
		this.name = name;
		this.isDefault = isDefault;
		this.location = typeof addresses[name] == "function" ? 
			addresses[name]() : addresses[name];
		this.pwd = "/";
		this.hasChanged = false;
		this.fs = computers[name].fs;
		this.dfs = computers[name].dfs;
		$.each(computers[name], function (property, value) {
			if ($.inArray(property, ["fs", "dfs"]) == -1) { 
				props[property] = value; 
			}
		});
		this.properties = props;

		hg.initComputerCommands(this);
	};

	/**
	 * hg.network.ping (location)
	 * - location : string - location to ping
	 *
	 * Pings 'location' and returns TRUE on success.
	 */
	hg.network.ping = function (location) {
		var isInWeb = addresses[location] || addresses[dnsTable[location]],
			localLocation = hg.state.computer.location + ">" + location,
			isLocal = addresses[localLocation];
		console.log("network.ping", [location]);
		return isInWeb || isLocal;
	};
	
	/**
	 * hg.load.state (obj)
	 * - obj : object - state object
	 *
	 * Load saved state.
	 *
	 * State object can contain two objects:
	 * - state : object - same format as in config
	 * - computer : object
	 *   - user : string
	 *   - hostname : string
	 *   - fs : object - file system (DFS cannot be loaded)
	 */
	hg.load.state = function (obj) {
		console.log("load.state", [obj]);
		if (obj.state) {
			$.each(obj.state.completedAssignments || {}, function (id, stat) {
				var $ass = $(".assignment-list .ass-" + id);

				if (! $ass.length) { return; }

				$ass.find(".ass-current-score").text("-");
				$ass.find(".ass-trials").text(stat.trials || "-");
				$ass.find(".ass-best-score").text(stat.best || "-");
				$ass.find(".ass-name a").addClass("completed-assignment");
				
			});
			
			$('#stats-overall-score').text(obj.state.overallScore || "0");
		}
		if (obj.computer) {
			var cmp = hg.state.getDefaultComputer();
			cmp.properties.user = obj.computer.user;
			cmp.fs = obj.computer.fs;
			cmp.hostname = obj.computer.hostname;
			hg.state.changeDir("/"); 
		}
	};
	
	/**
	 * hg.dump.computer ()
	 *
	 * Dump computer information if changes. Also, mark computer.hasChanges = false
	 * If chanes in filesystem (computer.hasChanges):
	 *   - dump = [ computerObj, callback ]
	 * Else:
	 *   - dump = [ null, callback ]
	 * Computer object has next keys:
	 *   - user : string
	 *   - hostname : string
	 *   - fs : object - file system (DFS cannot be loaded)
	 *
	 * If callback is called, the computer.hasChanges is reset to True
	 */
	hg.dump.computer = function () {
		console.log("pack.computer", []);
		var fs = null, cmp = hg.state.getDefaultComputer(), status = false;
		if (cmp) { 
			status = cmp.hasChanged; 
			cmp.hasChanged = false; 
		}
		return [(cmp && status) ? {
			fs: cmp.fs,
			hostname: cmp.hostname,
			id: cmp.name,
			user: cmp.properties.user
		} : null, function () {
			cmp.hasChanged = true;
		}];
	};

})(jQuery, HackerGame); 


