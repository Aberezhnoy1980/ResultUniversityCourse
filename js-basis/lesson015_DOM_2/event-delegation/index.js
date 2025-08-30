// Делегирования событий
const allNavigationButtons = document.querySelectorAll(
	".main-navigation__button-item"
);

// allNavigationButtons.forEach((button) => {
// 	button.addEventListener("click", (event) => {
// 		const targetButton = event.target;
// 		allNavigationButtons.forEach((navButton) => {
// 			navButton.classList.remove("main-navigation__button-item_selected");
// 		});
// 		targetButton.classList.add("main-navigation__button-item_selected");
// 	});
// });

const mainNavigation = document.querySelector(".main-navigation");

mainNavigation.addEventListener("click", (event) => {
	// console.log("target", event.target);
	const isNavButton = event.target.closest(".main-navigation__button-item");
	console.log("КЛИК НА КОНТЕЙНЕР");
	if (isNavButton) {
		allNavigationButtons.forEach((navButton) => {
			navButton.classList.remove("main-navigation__button-item_selected");
		});
		event.target.classList.add("main-navigation__button-item_selected");
	}
});

const firstNavButton = mainNavigation.firstElementChild;
// console.log(firstNavButton);
firstNavButton.addEventListener("click", (event) => {
	console.log("ПЕРВАЯ КНОПКА", event.target);
});

document.body.addEventListener("click", (event) => {
	console.log("КЛИК НА BODY", event.target);
});
