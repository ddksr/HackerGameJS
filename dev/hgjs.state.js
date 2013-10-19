/**

HackerGame

**/
(function ($, hg) {
	hg.cons.State = function State(computer, config) {
		this.computer = computer || new hg.cons.Computer("localhost");
		this.innerState = undefined;
		if (config && typeof config === "object") {
			$.each(config, function (property, value) {
				this[property] = value;
			});
		}
	};
	hg.cons.Task = function Task(taskName) {
		this.name = taskName; 
		this.html = undefined;
		this.isFinished = function () {};
		this.set = function () {};
		this.unset = function () {};
	};
	hg.cons.Task.prototype.switchTask = function (previousTask) {
		if (previousTask) { previousTask.unset(); }
		this.set();
		hg.callback = this.isFinished;
	};
	hg.cons.Assignment = function Assignment(assignment) {
		this.currentTask = -1;
		this.numOfTasks = 0; // set with array length
		this.tasks = []; // array of task objects // TODO: load
	};
	hg.cons.Assignment.prototype.startTimer = function () {
		hg.timer.start(this.startTime);
	};
	hg.cons.Assignment.prototype.nextTask = function () {
		var nextTask,
			prevTask = this.currentTask > 0 ? this.tasks[currentTask] : undefined;
		if (this.currentTask < this.numOfTasks) {
			prevTask = this.tasks[this.currentTask + 1];
			nextTask.switchTask(prevTask);
			this.currentTask += 1;
			return true;
		}
		return false;
	};
	hg.cons.Assignment.prototype.failAssignment = function () {
		hg.timer.stop();
	};
	hg.cons.Assignment.prototype.completeAssignment = function () {
		hg.timer.stop();
		
	};
	hg.stats = {
		completedAssignments: 0,
		completedTasks: 0,
		completedTasksOverall: 0
	};

})(jQuery, HackerGame);

