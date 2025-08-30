// Task 1
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

// Task 2
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

// Task 3
function createModalOverlay() {
	const modalOverlayEl = document.createElement("div");
	modalOverlayEl.classList.add("modal-overlay", "modal-overlay_hidden");

	const deleteModalEl = document.createElement("div");
	deleteModalEl.className = "delete-modal";

	const deleteModalQuestionEl = document.createElement("h3");
	deleteModalQuestionEl.className = "delete-modal__question";
	deleteModalQuestionEl.textContent =
		"Вы действительно хотите удалить эту задачу?";

	const deleteModalButtonsEl = document.createElement("div");
	deleteModalButtonsEl.className = "delete-modal__buttons";

	const cancelButtonEl = document.createElement("button");
	cancelButtonEl.classList.add(
		"delete-modal__button",
		"delete-modal__cancel-button"
	);
	cancelButtonEl.textContent = "Отмена";

	const confirmButton = document.createElement("button");
	confirmButton.classList.add(
		"delete-modal__button",
		"delete-modal__confirm-button"
	);
	confirmButton.textContent = "Удалить";

	document.body.append(modalOverlayEl);
	modalOverlayEl.append(deleteModalEl);
	deleteModalEl.append(deleteModalQuestionEl, deleteModalButtonsEl);
	deleteModalButtonsEl.append(cancelButtonEl, confirmButton);

	taskListElement.addEventListener("click", (event) => {
		const delBtn = event.target;
		if (delBtn.classList.contains("task-item__delete-button")) {
			modalOverlayEl.classList.remove("modal-overlay_hidden");
			const id = delBtn
				.closest(".task-item")
				.getAttribute("data-task-id");

			document.querySelector(".delete-modal__buttons").addEventListener(
				"click",
				(event) => {
					if (
						event.target.classList.contains(
							"delete-modal__cancel-button"
						)
					)
						modalOverlayEl.classList.add("modal-overlay_hidden");
					else if (
						event.target.classList.contains(
							"delete-modal__confirm-button"
						)
					)
						deleteElementById(id, modalOverlayEl);
					else modalOverlayEl.classList.add("modal-overlay_hidden");
				},
				{ once: true }
			);
		}
	});
}

createModalOverlay();

function deleteElementById(id, modalOverlayEl) {
	const startIdx = tasks.findIndex((task) => task.id === id);
	tasks.splice(startIdx, 1);

	const elToDel = [...document.querySelectorAll(".task-item")].find(
		(el) => el.getAttribute("data-task-id") === id
	);
	elToDel.remove();
	modalOverlayEl.classList.add("modal-overlay_hidden");
}

// Task 4
document.addEventListener("keydown", (event) => {
	const { key } = event;
	if (key === "Tab") {
		themeToggle();
	}
});

let isCurrentThemeLight = true;

function themeToggle() {
	const { body } = document;
	const taskItems = document.querySelectorAll(".task-item");
	const buttons = document.querySelectorAll("button");

	body.style.background = isCurrentThemeLight ? "#24292E" : "initial";
	taskItems.forEach(
		(task) => (task.style.color = isCurrentThemeLight ? "#fff" : "initial")
	);
	buttons.forEach(
		(btn) =>
			(btn.style.border = isCurrentThemeLight ? "1px solid #fff" : "none")
	);

	isCurrentThemeLight = !isCurrentThemeLight;

	// if (isCurrentThemeLight) {
	// 	body.style.background = "#24292E";
	// 	taskItems.forEach((task) => (task.style.color = "#fff"));
	// 	buttons.forEach((btn) => (btn.style.border = "1px solid #fff"));
	// 	isCurrentThemeLight = false;
	// } else {
	// 	body.style.background = "initial";
	// 	taskItems.forEach((task) => (task.style.color = "initial"));
	// 	buttons.forEach((btn) => (btn.style.border = "none"));
	// 	isCurrentThemeLight = true;
	// }
}

// https://codepen.io/bxzcnzcb-the-typescripter/pen/NPGyRVz
