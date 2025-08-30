// for (let i = 0; i < 3; i++) {
// 	let newStudent = prompt("Введите имя новоло студента!");
// 	if (newStudent) {
// 		newStudent = newStudent.trim();
// 		alert(`Добро пожаловать, ${newStudent}!`);
// 	}
// }

// while
let i = 0;
// while (i < 3) {
// 	let newStudent = prompt("Введите имя нового студента!").trim();
// 	newStudent && alert(`Добро пожаловать ${newStudent}!`);
// 	i++;
// }

// do while
i = 3;
do {
	let newStudent = prompt("Введите имя нового студента!").trim();
	newStudent && alert(`Добро пожаловать ${newStudent}!`);
	i--;
} while (i);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/emNqXNv
