const firstNavButton = document.querySelector(".main-navigation__button-item");
firstNavButton.addEventListener("click", (event) => {
	console.log(event.target);
	// const target = event.target;
	const { target } = event; // modern
	target.classList.add("main-navigation__button-item_selected");
});

const allNavButtons = document.querySelectorAll(
	".main-navigation__button-item"
);
// console.log(typeof allNavButtons, '\n', {}.toString.call(allNavButtons));
// for (let i = 1; i < allNavButtons.length; i++) {
//     allNavButtons[i].addEventListener('click', (event) => {
//         const { target } = event;
//         target.classList.toggle('main-navigation__button-item_selected')
//     })
// }
// console.log(allNavButtons);
allNavButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		allNavButtons.forEach((button) => {
			button.classList.remove("main-navigation__button-item_selected");
		});
		const { target } = event;
		target.classList.add("main-navigation__button-item_selected");
	});
});

// submit
const createTaksForm = document.querySelector(".create-task-block");
createTaksForm.addEventListener("submit", (event) => {
	event.preventDefault(); // отмена действий формы по умолчанию (перезагрузка страницы и отправка данных формы)
	// console.log(event);
	const { target } = event;
	const taskNameInput = target.taskName;
	const inputValue = taskNameInput.value;

	console.log("inputValue", inputValue);

	if (inputValue) {
		alert(`Вы создали задачу: ${inputValue}`);
	} else {
		alert("Введите правильные двнные");
	}
});

// keydown, keyup
document,
	addEventListener("keydown", (event) => {
		const { key } = event;
		console.log("keydodwn", key);
		// const taskItetmToDelete = document.querySelector(
		// 	`[data-task-id="${key}"]`
		// );
		// if (taskItetmToDelete) {
		// 	const deleteConfirmed = confirm(
		// 		"Вы действительно хотите удалить данную задачу"
		// 	);
		// 	if (deleteConfirmed) {
		// 		taskItetmToDelete.remove();
		// 	}
		// }
	});

document.addEventListener("keyup", (event) => {
	const { key } = event;
	console.log("keyup", key);
	const taskItetmToDelete = document.querySelector(`[data-task-id="${key}"]`);
	if (taskItetmToDelete) {
		taskItetmToDelete.remove();
	}
});

// mouseover
const createTooltip = (text) => {
	const tooltip = document.createElement("span");
	tooltip.textContent = text;
	tooltip.className = "tooltip";

	return tooltip;
};

document.addEventListener("mouseover", (event) => {
	const { target } = event;
	console.log(target);
	const isOverDeleteButton = target.className.includes(
		"task-item__delete-button"
	);
	if (isOverDeleteButton) {
		console.log("success");
		const taskItemHTML = target.closest(".task-item");
		const taskId = taskItemHTML?.dataset.taskId;
		if (taskId) {
			const tooltipHTML = createTooltip(
				`Удалить задачу под номером ${taskId}?`
			);
			target.append(tooltipHTML);
		}
	}
});

// mouseout
document.addEventListener("mouseout", (event) => {
	const { target } = event;
	const isOutDeleteButton = target.className.includes(
		"task-item__delete-button"
	);
	if (isOutDeleteButton) {
		const tooltip = document.querySelector(".tooltip");
		// if (tooltip) {
		// 	tooltip.remove();
		// }
		tooltip?.remove();
	}
});

// mousemove
document.addEventListener("mousemove", (event) => {
	// console.log(event);
});

// contextmenu
document.addEventListener("contextmenu", (event) => {
	console.log(event);
	event.preventDefault();
});

// change, input
const checkTaskNameInputOnValidation = (value) => {
	if (!value || value.includes("@")) {
		return false;
	}

	return true;
};

const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = createTaskBlock.querySelector(
	".create-task-block__input"
);

// taskNameInput.addEventListener("change", (event) => {
// 	const { target } = event;
// 	const { value } = target;
// 	const isValid = checkTaskNameInputOnValidation(value);
// 	const messageBlockfromDOM = document.querySelector(".error-message-block");

// 	if (!isValid) {
// 		const newMessageBlock = document.createElement("span");
// 		newMessageBlock.className = "error-message-block";
// 		newMessageBlock.textContent =
// 			"Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ @";
// 		createTaskBlock.append(newMessageBlock);
// 	} else if (isValid && messageBlockfromDOM) {
// 		messageBlockfromDOM.remove();
// 	}
// 	// console.log(value);
// });

taskNameInput.addEventListener("input", (event) => {
	const { target } = event;
	const { value } = target;
	console.log(value);
	const isValid = checkTaskNameInputOnValidation(value);
	const messageBlockfromDOM = document.querySelector(".error-message-block");

	if (!isValid) {
		const newMessageBlock = document.createElement("span");
		newMessageBlock.className = "error-message-block";
		newMessageBlock.textContent =
			"Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ @";
		createTaskBlock.append(newMessageBlock);
	} else if (isValid && messageBlockfromDOM) {
		messageBlockfromDOM.remove();
	}
});
