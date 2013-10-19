/**

HackerGame

**/
(function ($, hg) {
	var addresses = {}, dnsTable = {}, computers = {
		// Define computers here in format location: { ... properties ... }
		"localhost": {
			hostname: "my-machine",
			localIP: "192.168.1.2",
			externalIP: null,
			visibleFrom: null,
			domain: null,
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
		this.location = addresses[name];
		this.pwd = "/";
		$.each(computers[name], function (property, value) {
			props[property] = value;
		});
		this.properties = props;
	};
	hg.network.ping = function (location) {
		var isInWeb = addresses[location] !== undefined,
			localLocation = hg.state.computer.location + ">" + location,
			isLocal = addresses[localLocation] !== undefined;
		return isInWeb || isLocal;
	};

})(jQuery, HackerGame); 


