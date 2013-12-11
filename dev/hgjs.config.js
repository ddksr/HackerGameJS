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
				id: "password1",
				name: "How to crack passwords"
			},
			"Level 1",
			{
				id: "password2",
				name: "Get the secret word"
			},
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

