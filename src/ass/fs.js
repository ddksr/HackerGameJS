(function ($, hg) {
	var pwd = "/",
		fs = hg.state.computer.fs,
		mailBody = $("#mail1").html(),
		stash = {},
		names = {
			"/":  ["/", "C:", "C:"],
			"/bin": ["bin", "Program Files", "C:\\Program Files"],
			"/home": ["home", "Users", "C:\\Users"],
			"/home/charlie": ["charlie", "Charlie", "C:\\Users\\Charlie"],
			"/home/charlie/documents" : ["documents", "Documents", "C:\\Users\\Charlie\\Documents"],
			"/home/charlie/download" : ["download", "Downloads", "C:\\Users\\Charlie\\Download"]
		},
		paths = {
			"/": {
				"/": ".",
				"/bin": ["bin", "Program Files"],
				"/home": ["home", "Users"],
				"/home/charlie": ["home/charlie", "User\\Charlie"],
				"/home/charlie/documents": [
					"home/charlie/documents",
					"Users\\Charlie\\Documents"
				],
				"/home/charlie/download": [
					"home/charlie/download",
					"Users\\Charlie\\Downloads"
				]
			},
			"/bin": {
				"/": "..",
				"/bin": ".",
				"/home": ["../home", "../Users"],
				"/home/charlie": [
					"../home/charlie",
					"..\\Users\\Charlie"
				],
				"/home/charlie/documents": [
					"../home/charlie/documents",
					"..\\Users\\Charlie\\Documents"
				],
				"/home/charlie/download": [
					"../home/charlie/download",
					"..\\Users\\Charline\\Downloads"
				],	
			},
			"/home": {
				"/": "..",
				"/bin": [
					"../bin",
					"..\\Program Files"
				],
				"/home": ".",
				"/home/charlie": ["charlie", "Charlie"],
				"/home/charlie/documents": [
					"charlie/documents",
					"Charlie\\Documents"
				],
				"/home/charlie/download": [
					"charlie/download",
					"Charlie\\Downloads",
				]
			},
			"/home/charlie": {
				"/": "../..",
				"/bin": [
					"../../bin",
					"../../Program Files",
				],
				"/home": "..",
				"/home/charlie": ".",
				"/home/charlie/documents": ["documents", "Documents"],
				"/home/charlie/download": ["download", "Downloads"]
			},
			"/home/charlie/documents": {
				"/": ".",
				"/bin": [
					"../../../bin",
					"../../../Program Files"
				],
				"/home": "../..",
				"/home/charlie": "..",
				"/home/charlie/documents": ".",
				"/home/charlie/download": [
					"../download",
					"..Downloads"
				]
			},
			"/home/charlie/download": {
				"/": ".",
				"/bin": [
					"../../../bin",
					"../../../Program Files",
					],
				"/home": "../..",
				"/home/charlie": "..",
				"/home/charlie/documents": [
					"../documents",
					"../Documents"
				],
				"/home/charlie/download": "."
			}
		},
		draw = function () {
			// Init canvas

			var dType = parseInt($("#controls :checked").val(), 10) || 0,
				width = 400,
				height = 300,
				$div = $(document.createElement("div")).addClass("svg-popup"),
				svg = d3.select("#canvas").append("svg"),
				diagonal, cluster, nodes, links, link, node, stats,
				getPaths = function (d) {
					var relativeRaw = paths[pwd][d.name],
						relative = $.isArray(relativeRaw) ? relativeRaw[dType] : relativeRaw,
						absolute = dType === 0 ? d.name : names[d.name][2],
						text = hg.t("Relative") + ": " + relative + "\n"
							+ hg.t("Absolute") + ": " + absolute;
					return text;
				},
				nodeMouseIn = function () {
					d3.select(this).select("circle").append("svg:title")
						.text(getPaths);
				},
				nodeMouseOut = function () {
					d3.select(this).select("circle").select("title").remove();
				},
				nodeClick = function () {
					pwd = this.__data__.name;
					d3.select(".selected").classed("selected", false);

					d3.select(this).classed("selected", true);
					
					prevNode = this;
				},
				namesRefresh = function () {
					node.selectAll("text").text(function (d) {
						return names[d.name][dType];
					});
				};

			

			var root = {
				name: '/',
				children: [{
					name: '/home',
					children: [
						{
							name: '/home/charlie',
							children: [
								{ name: '/home/charlie/documents' },
								{ name: '/home/charlie/download' }
							]
						}
					]
				}, { name: '/bin', }]
			};



			cluster = d3.layout.tree()
				.size([width, height - 100]);
			
			diagonal = d3.svg.diagonal()
				.projection(function (d) {
					return [d.x, d.y + 50];
				});

			svg.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", "translate(0,0)");

			nodes = cluster.nodes(root);
			links = cluster.links(nodes);

			link = svg.selectAll(".link")
				.data(links)
				.enter().append("path")
				.attr("class", "link")
				.style("stroke-width", "1px")
				.attr("d", diagonal);

			node = svg.selectAll(".node")
				.data(nodes)
				.enter().append("g")
				.on("mouseover", nodeMouseIn)
				.on("mouseout", nodeMouseOut)
				.on("click", nodeClick)
				.style("cursor", "pointer")
				.attr("class", "node")
				.attr("transform", function (d) {
					return "translate(" + (d.x) + "," + (d.y+50) + ")";
				});

			node.append("circle")
				.attr("r", 15);

			node.append("text")
				.attr("dx", function (d) {
					return 20;
				})
				.attr("dy", 3)
				.attr("fill", "white")
				.attr("font-weight", "bold")
				.text(function (d) {
					return (names[d.name][dType]);
				});

			d3.select(".node").classed("selected", true);

			$("#controls input").click(function () {
				dType = parseInt($("#controls :checked").val(), 10) || 0;
				namesRefresh();
			});
			$("#canvas svg").css({
				"display": "block",
				"margin": "5px auto 5px auto"
			});
			
		};

	fs.etc.hostname = hg.t("HACKED");
	fs.bin.linux = null;
	fs.tmp.hg = null;

	hg.load.assignment([
		{
			id: "pwd",
			evaluate: function (c) {
				return c.input == "pwd";
			},
			points: 10
		},
		{
			id: "ls",
			evaluate: function (c) {
				return c.input == "ls";
			},
			points: 10
		},
		{
			id: "cd",
			evaluate: function (c) {
				return hg.state.computer.pwd == "/bin";
			},
			points: 30
		},
		{
			id: "remove",
			evaluate: function (c) {
				return hg.state.computer.fs.bin.linux === undefined;
			},
			points: 30
		},
		{
			id: "abs",
			evaluate: function (c) {
				var pwd = hg.state.computer.pwd,
					fs = hg.state.computer.fs;
				return pwd == "/home/me" && c.command == "cd" 
					&& c.argsString && c.argsString.charAt(0) == "/";
			},
			points: 20
		},
		{
			id: "back",
			evaluate: function (c) {
				var pwd = hg.state.computer.pwd;
				return c.command == "cd" && c.argsString == ".." && pwd == "/home";
			},
			points: 30
		},
		{
			id: "tree",
			evaluate: function (c) {
				return c.command == "tree";
			},
			bonus: function () { return c.command == "ls"; },
			points: 10
		},
		{
			id: "mail",
			set: function () {
				hg.mail.recieve({
					isSensei: true,
					body: mailBody
				}, true); 
				$("#mail").popover("show");
			},	
			evaluate: function (c) {
				return hg.state.computer.pwd == "/tmp";
			},
			points: 20
		},
		{
			id: "move",
			evaluate: function (c) {
				var fs = hg.state.computer.fs;
				return fs.bin.hg === null && fs.tmp.hg === undefined;
			},
			points: 30
		},
		{
			id: "edit",
			evaluate: function (c) {
				var check = hg.util.getFile(c.argsString),
					fs = hg.state.computer.fs;
				return fs.etc.hostname !== hg.t("HACKED")
					&& c.command == "cat" && check;
			},
			points: 40
		}
	], {
		startTime: 900,
		initCallback: draw
	});
})(jQuery, HackerGame);
