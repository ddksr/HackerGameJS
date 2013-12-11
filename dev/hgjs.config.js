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
			"Training",
			{ 
				id: "intro",
				name: "Introduction to the terminal"
			},
			{
				id: "move",
				name: "How to move around"
			},
			{
				id: "copy",
				name: "Moving and copying files"
			},
			{
				id: "password",
				name: "Cracking passwords"
			},
			"Level 1: Discovering insecurity"
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

