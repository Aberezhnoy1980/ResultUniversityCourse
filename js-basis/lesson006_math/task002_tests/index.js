let correctAnswers = 0;
let incorrectAnswers = 0;

// 1
const task1Question = "Сколько будет 2 + 2?";
const task1Answer = 4;
const task1UserAnswer = Number(
	prompt(task1Question, "Введите свой ответ").trim()
);
if (task1UserAnswer === task1Answer) {
	correctAnswers++;
	alert("Ответ Верный");
} else {
	incorrectAnswers++;
	alert("Ответ Неверный");
}

// 2
const task2Question = "Сколько будет 2 * 2?";
const task2Answer = 4;
const task2UserAnswer = Number(
	prompt(task2Question, "Введите свой ответ").trim()
);
if (task2UserAnswer === task2Answer) {
	correctAnswers++;
	alert("Ответ Верный");
} else {
	incorrectAnswers++;
	alert("Ответ Неверный");
}

// 3
const task3Question =
	"У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const task3Answer = 1;
const task3UserAnswer = Number(
	prompt(task3Question, "Введите свой ответ").trim()
);
if (task3UserAnswer === task3Answer) {
	correctAnswers++;
	alert("Ответ Верный");
} else {
	incorrectAnswers++;
	alert("Ответ Неверный");
}

// 4
const task4Question =
	"У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const task4Answer = 12;
const task4UserAnswer = Number(
	prompt(task4Question, "Введите свой ответ").trim()
);
if (task4UserAnswer === task4Answer) {
	correctAnswers++;
	alert("Ответ Верный");
} else {
	incorrectAnswers++;
	alert("Ответ Неверный");
}

// 5
const task5Question = "Сколько будет 2 + 2 * 2?";
const task5Answer = 6;
const task5UserAnswer = Number(
	prompt(task5Question, "Введите свой ответ").trim()
);
if (task5UserAnswer === task5Answer) {
	correctAnswers++;
	alert("Ответ Верный");
} else {
	incorrectAnswers++;
	alert("Ответ Неверный");
}

alert(
	`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/VYLoVBO