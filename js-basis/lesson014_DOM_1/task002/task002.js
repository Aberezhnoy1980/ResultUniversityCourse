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

tasks.forEach((task) => {
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
});

// Alt
// tasks.forEach((task) => {
// 	taskListElement.insertAdjacentHTML(
// 		"beforeend",
// 		`
//         <div class="task-item" data-task-id="${task.id}">
//             <div class="task-item__main-container">
//                 <div class="task-item__main-content">
//                     <form class="checkbox-form">
//                         <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
//                         <label for="task-${task.id}"></label>
//                     </form>
//                     <span class="task-item__text">
//                         ${task.text}
//                     </span>
//                 </div>
//                 <button class="task-item__delete-button default-button delete-button">
//                     Удалить
//                 </button>
//             </div>
//         </div>
//         `
// 	);
// });

// https://codepen.io/bxzcnzcb-the-typescripter/pen/wBKqpxb