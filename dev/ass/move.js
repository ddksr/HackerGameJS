(function ($, hg) {
	var pwd = "/",
		names = {
			"/":  ["/", "C:", "C:"],
			"/bin": ["bin", "Program Files", "C:\\Program Files"],
			"/home": ["home", "Users", "C:\\Users"],
			"/home/simon": ["simon", "Simon", "C:\\Users\\Simon"],
			"/home/simon/documents" : ["documents", "Documents", "C:\\Users\\Simon\\Documents"],
			"/home/simon/download" : ["download", "Downloads", "C:\\Users\\Simon\\Download"]
		},
		paths = {
			"/": {
				"/": ".",
				"/bin": "bin",
				"/home": "home",
				"/home/simon": "home/simon",
				"/home/simon/documents": "home/simon/documents",
				"/home/simon/download": "home/simon/download"
			},
			"/bin": {
				"/": "..",
				"/bin": ".",
				"/home": "../home",
				"/home/simon": "../home/simon",
				"/home/simon/documents": "../home/simon/documents",
				"/home/simon/download": "../home/simon/documents"
			},
			"/home": {
				"/": "..",
				"/bin": "../bin",
				"/home": ".",
				"/home/simon": "simon",
				"/home/simon/documents": "simon/documents",
				"/home/simon/download": "simon/downlaod"
			},
			"/home/simon": {
				"/": ".",
				"/bin": "../../bin",
				"/home": "..",
				"/home/simon": ".",
				"/home/simon/documents": "documents",
				"/home/simon/download": "download"
			},
			"/home/simon/documents": {
				"/": ".",
				"/bin": "../../../bin",
				"/home": "../..",
				"/home/simon": "..",
				"/home/simon/documents": ".",
				"/home/simon/download": "../download"
			},
			"/home/simon/download": {
				"/": ".",
				"/bin": "../../../bin",
				"/home": "../..",
				"/home/simon": "..",
				"/home/simon/documents": "../documents",
				"/home/simon/download": "."
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
					var relative = paths[pwd][d.name],
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
							name: '/home/simon',
							children: [
								{ name: '/home/simon/documents' },
								{ name: '/home/simon/download' }
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
		}
	], {
		startTime: 0,
		initCallback: draw
	});

	

})(jQuery, HackerGame);
