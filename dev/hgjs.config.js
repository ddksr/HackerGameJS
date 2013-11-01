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
		imagesPath: "img/",
		assignments: [
			{ 
				id: "intro",
				name: "Introduction to the terminal"
			}
		]
	};
})(jQuery, HackerGame);
