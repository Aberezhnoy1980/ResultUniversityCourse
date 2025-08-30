const tasks = [
	{
		id: "1138465078061",
		completed: false,
		text: "Посмотреть новый урок по JavaScript",
	},
	{
		id: "1138465078062",
		completed: false,
		text: "Выполнить тест после урока",
	},
	{
		id: "1138465078063",
		completed: false,
		text: "Выполнить ДЗ после урока",
	},
];

const taskListElement = document.querySelector(".tasks-list");

const renderTask = (task) => {
	const taskItemDivEl = document.createElement("div");
	const mainContainerDivEl = document.createElement("div");
	const mainContentDivEl = document.createElement("div");

	taskItemDivEl.className = "task-item";
	taskItemDivEl.setAttribute("data-task-id", task.id);
	mainContainerDivEl.className = "task-item__main-container";

	mainContentDivEl.className = "task-item__main-content";

	taskListElement.append(taskItemDivEl);
	taskItemDivEl.append(mainContainerDivEl);
	mainContainerDivEl.append(mainContentDivEl);

	const checkboxFormEl = document.createElement("form");
	checkboxFormEl.className = "checkbox-form";

	const checkboxEl = document.createElement("input");
	checkboxEl.className = "checkbox-form__checkbox";
	checkboxEl.type = "checkbox";
	checkboxEl.id = `task-${task.id}`;

	const labelEl = document.createElement("label");
	labelEl.htmlFor = `task-${task.id}`;

	const textEl = document.createElement("span");
	textEl.className = "task-item__text";
	textEl.textContent = task.text;

	const deleteButtonEl = document.createElement("button");
	deleteButtonEl.className = "task-item__delete-button";
	deleteButtonEl.classList.add("default-button", "delete-button");
	deleteButtonEl.textContent = "Удалить";

	checkboxFormEl.append(checkboxEl, labelEl);
	mainContentDivEl.append(checkboxFormEl, textEl);
	mainContainerDivEl.append(mainContentDivEl, deleteButtonEl);
	taskItemDivEl.append(mainContainerDivEl);
};

tasks.forEach((task) => renderTask(task));

const createTaskBlockEl = document.querySelector(".create-task-block");

const createTask = (event) => {
	event.preventDefault();
	const { target } = event;

	const newTask = {
		id: Date.now(),
		completed: false,
		text: target.elements.taskName.value,
	};

	if (isTaskValid(newTask, tasks)) {
		tasks.push(newTask);
		renderTask(tasks.at(-1));
	}
};

const errorMsgElement = document.createElement("span");

function isTaskValid(task, tasks) {
	errorMsgElement.textContent = "";
	errorMsgElement.classList.toggle("error-message-block");

	if (!task.text) {
		errorMsgElement.textContent = "Название задачи не должно быть пустым";
		errorMsgElement.classList.add("error-message-block");
		createTaskBlockEl.append(errorMsgElement);
		return false;
	}

	if (tasks.map((task) => task.text).some((text) => text === task.text)) {
		errorMsgElement.textContent = "Задача с таким названием уже существует";
		errorMsgElement.classList.add("error-message-block");
		createTaskBlockEl.append(errorMsgElement);
		return false;
	}

	return true;
}

createTaskBlockEl.addEventListener("submit", createTask);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/ByoYLVw