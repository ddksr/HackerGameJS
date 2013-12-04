/**

HackerGame

**/
(function ($, hg) {
	var addresses = { 
			"127.0.0.1": function () { return hg.state.computer.name; }
		}, 
		dnsTable = { localhost: "127.0.0.1" }, 
		defaultFs = {
			"bin": {},
			"home": {},
			"dev": {},
			"tmp": {},
			"etc": {}
		},
		computers = {
			// Define computers here in format location: { ... properties ... }
			"-": {
				hostname: "my-machine",
				localIP: "192.168.1.2",
				user: "me",
				externalIP: null,
				visibleFrom: null,
				domain: null,
				commandBlackList: {},
				fs: {}
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
		computers[name].fs = hg.util.extend(defaultFs, computers[name].fs);
		if (!computers[name].fs.home[props.user]) { 
			computers[name].fs.home[props.user] = {};
		}

		computers[name].fs.etc.hostname = props.hostname;
	});
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
		$.each(computers[name], function (property, value) {
			if ($.inArray(property, ["fs"]) == -1) { 
				props[property] = value; 
			}
		});
		this.properties = props;

		hg.initComputerCommands(this);
	};
	hg.network.ping = function (location) {
		var isInWeb = addresses[location] || addresses[dnsTable[location]],
			localLocation = hg.state.computer.location + ">" + location,
			isLocal = addresses[localLocation];
		console.log("network.ping", [location]);
		return isInWeb || isLocal;
	};
	
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


