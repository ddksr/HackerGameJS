module("util");

test("util.extend", function () {
	var defaultObj = {
			a: 1,
			b: 2,
			n: "bla",
			c: {
				x: 1,
				y: 2,
				z: {},
				d: {},
				e: {}
			}
		},
		overObj = {
			a: 2,
			c: {
				x: 2,
				y: 2,
				z: { a: 1 },
				d: "x",
				f: "y"
			},
			n: null
		},
		resObj = {
			a: 2,
			b: 2,
			n: null,
			c: {
				x: 2,
				y: 2,
				z: { }, // because default keys (settings) have priority over overObj keys
				d: "x",
				e: {},
			}

		};
	deepEqual(HackerGame.util.extend(defaultObj, overObj), resObj, "Object extending works.");
});

test("util.randIP", function () {
	var ip, 
		i, 
		testFun = function (i, seg) {
			ok(seg > 0 && seg < 256, "IP segment size ok, "+i+". experiment.");
		};
	for (i = 0; i < 100; i++) {
		ip = HackerGame.util.randIP().split(".");
		ok(ip.length == 4, "Correct IP size, "+i+". experiment.");
		$.each(ip, testFun);
		ok($.inArray(ip[0], [10,127,254,255,1,2,169,172,192]) == -1, "First IP segment ok, "+i+". experiment.");
	}
});

test("util.randResponseTime", function () {
	var rand = HackerGame.util.randResponseTime(10, 20),
		rands = [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()];
	$.each(rands, function (i, val) {
		ok(val <= 20 && val >= 10, "Random generagor works, " + i + ". experiment.");
	});
});
