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
