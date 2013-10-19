/**

HackerGame

**/
(function ($, hg) {
	var addresses = { 
			"127.0.0.1": function () { return hg.state.computer.name; }
		}, 
		dnsTable = { localhost: "127.0.0.1" }, 
		computers = {
			// Define computers here in format location: { ... properties ... }
			"proxy": {
				hostname: "my-machine",
				localIP: "192.168.1.2",
				user: "me",
				externalIP: null,
				visibleFrom: null,
				domain: null,
				commandBlackList: {},
				filesystem: {
					"/": ["bin", "usr", "home"],
					"/dev/": ["random"],
					"/home/" : ["user"]
				},
				files: {
					"/dev/random": (function () { return Math.random() })()
				}
			}
		};
	// initialize IP map and DNS table
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
	});
	hg.cons.Computer = function Computer (name) {
		var props = {};
		if (! name) { name = "localhost"; }
		if (! computers[name]) { return null; }
		this.name = name;
		this.location = typeof addresses[name] == "function" ? 
			addresses[name]() : addresses[name];
		this.pwd = "/";
		$.each(computers[name], function (property, value) {
			props[property] = value;
		});
		this.properties = props;
	};
	hg.network.ping = function (location) {
		var isInWeb = addresses[location] || addresses[dnsTable[location]],
			localLocation = hg.state.computer.location + ">" + location,
			isLocal = addresses[localLocation];
		return isInWeb || isLocal;
	};

})(jQuery, HackerGame); 


