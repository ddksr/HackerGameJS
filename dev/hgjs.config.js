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
			"How to play",
			{ 
				id: "intro",
				name: "Introduction to the terminal"
			},
			{
				id: "move",
				name: "How to move around"
			},
			"Security",
			{
				id: "password",
				name: "Cracking passwords"
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

