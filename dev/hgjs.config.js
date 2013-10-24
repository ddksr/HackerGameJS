(function ($, hg) {
	hg.config = {
		assignmentScopeSelector: ".assignment-scope",
		defaultComputer: "proxy",
		loginRequired: true,
		terminal: {
			greetings: 'Welcome!',
			name: 'hacker-terminal',
			height: 400,
			tabcompletion: true,
			prompt: '$ '
		},
		basePath: "",
		assignmentsPath: "ass/",
		assignments: {
			"intro": {
				name: "Introduction",
				level: 1
			}
		}
	};
})(jQuery, HackerGame);
