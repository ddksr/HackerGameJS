(function ($, hg) {
	var pwd = "/",
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

	hg.load.assignment([
		{
			id: "pwd",
			evaluate: function (c) { return c.input === "pwd"; },
			points: 10
		},
		{
			id: "ls",
			evaluate: function (c) { 
				return c.command === "ls" && c.argsString.match(/\/?bin/) !== null; 
			},
			points: 20
		},
		{
			id: "cd",
			evaluate: function (c) {
				return hg.state.computer.pwd === "/bin";
			},
			points: 20
		},
		{
			id: "cd-back",
			evaluate: function (c) {
				return hg.state.computer.pwd === "/" && c.input == "cd /";
			},
			points: 20
		},
		{
			id: "cd-bin-back",
			evaluate: function (c) {
				var s = stash;
				if (! s["cd-bin-back"]) { s["cd-bin-back"] = {}; }
				s = s["cd-bin-back"];
				s.bin = s.bin || hg.state.computer.pwd === "/bin";
				s.back = s.back || (hg.state.computer.pwd === "/" && c.input.match(/cd \.\./) !== null);
				return s.bin && s.back;
			},
			points: 30
		},
		{
			id: "cd-tmp",
			evaluate: function (c) {
				return hg.state.computer.pwd === "/tmp";
			},
			points: 5
		},
		{
			id: "mkdir",
			evaluate: function (c) {
				var s = stash.mkdir,
					tmp = hg.state.computer.pwd === "/tmp/assignment",
					mkdir = c.input.match(/mkdir assignment/) !== null,
					created = typeof(hg.state.computer.fs.tmp.assignment) === "object";
				if (!s) {
					stash.mkdir = {};
					s = stash.mkdir;
				}
				s.mkdir = s.mkdir || mkdir;
				s.tmp = s.tmp || tmp;
				s.created = s.created || created;
				return s.tmp && s.mkdir && s.created;
			},
			points: 20
		},
		{
			id: "mkdir-rel",
			evaluate: function (c) {
				var pwd = hg.state.computer.pwd === "/tmp/assignment",
					mkdir = c.input.match(/mkdir ..\/\w+/) !== null;
				return pwd && mkdir;
			},
			points: 30
		}
	], {
		startTime: 0,
		initCallback: draw
	});

	

})(jQuery, HackerGame);
