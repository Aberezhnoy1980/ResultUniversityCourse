const allElements = document.querySelectorAll("*");

allElements.forEach((element) => {
	element.addEventListener("click", (event) => {
		if (event.currentTarget.tagName === "FORM") {
			event.stopPropagation(); // остановить всплытие
		}
		alert(`Всплытие (bubbling): ${element.tagName}`);
	});
	// element.addEventListener(
	// 	"click",
	// 	() => {
	// 		alert(`Погружение (capture): ${element.tagName}`);
	// 	},
	// 	true // аргумент для вызова погружения (по деволту аогумента нет и происходит всплытие)
	// );
});
