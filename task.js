let taskManager = (function () {
	// your code here
	let tasks = [];

	function addTask(description) {
		tasks.push(description);
		return addTask;
	};

	function displayTasks() {
		for ( index of tasks) {
			console.log(index);
		};
	}

	return { addTask: addTask, displayTasks: displayTasks };

})();

taskManager.addTask(' task 1');

taskManager.addTask(' task 2');

taskManager.addTask(' task 3');

taskManager.displayTasks();
