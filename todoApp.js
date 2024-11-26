const tasks = [];

const addTask = (description, priority = "low") => {
  tasks.push({
    id: tasks.length + 1,
    description,
    priority,
  });
  console.log(`Task ${description} has been added!`);
};

const displayAllTasks = () => {
  console.clear();
  console.log("All tasks:");
  tasks.forEach((task) => {
    console.log(`Task ${task.id}: ${task.description} (${task.priority})`);
  });
};

const deleteTaskById = (id) => {
  console.clear();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    console.log(`Task with id ${id} not found!`);
    return;
  }
  tasks.splice(taskIndex, 1);
  console.log(`Task with id ${id} has been deleted!`);
};

const filterByPriority = (priority) => {
  console.clear();
  const filteredTasks = tasks.filter((task) => task.priority === priority);
  console.log(`Tasks with priority ${priority}:`);
  filteredTasks.forEach((task) => {
    console.log(`Task ${task.id}: ${task.description}`);
  });
};

const interactiveMenu = () => {
  let option;
  do {
    option = prompt(`Choose an option:
      1. Add a task
      2. Display all tasks
      3. Delete a task by id
      4. Filter by priority
      5. Exit
      `);
    switch (option) {
      case "1": {
        const description = prompt("Enter the task description:");
        const priority = prompt("Enter the task priority (low, medium, high):");
        addTask(description, priority);
        break;
      }
      case "2":
        displayAllTasks();
        break;
      case "3": {
        const id = parseInt(prompt("Enter the task id to delete:"));
        deleteTaskById(id);
        break;
      }
      case "4": {
        const priorityToFilter = prompt(
          "Enter the priority to filter by (low, medium, high):"
        );
        filterByPriority(priorityToFilter);
        break;
      }
      case "5":
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid option, please try again!");
    }
  } while (option !== "5");
};

window.onload = () => {
  document.querySelector("button").addEventListener("click", interactiveMenu);
};
