(function ($, hg) {

	/* hg.config
	 *  
	 * Configuration object. Everything can be overwritten trough settings.
	 */
	hg.config = {
		// Where to refresh translations when a new assignment is loaded
		assignmentScopeSelector: ".assignment-scope",
		// What is users default computer
		defaultComputer: "-",
		// Terminal settings
		terminal: {
			greetings: 'Welcome!',
			name: 'hacker-terminal',
			height: 400,
			tabcompletion: true,
		},
		// Base path for AJAX loads
		basePath: "", // TODO: use this!!!
		// Assignments path
		assignmentsPath: "ass/", // TODO: use this!!
		// Path to images
		imagesPath: "img/", // TODO: use this!!!
		// Assignments array of objects in form { id: ID, name: NAME } or seperator strings
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
		// Default user information: this refreshes the dynamic fields
		user: {
			email: "",
			name: "Anon"
		},
		// Default state information
		state: {
			completedAssignments: {},
			overallScore: 10
		}
	};
})(jQuery, HackerGame);

