(function ($, hg) {
	hg.config = {
		assignmentScopeSelector: ".assignment-scope",
		defaultComputer: "-",
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
		],
		user: {
			email: "",
			name: "Anon"
		},
		state: {
			completedAssignments: {},
			overallScore: 10
		}
	};
})(jQuery, HackerGame);
