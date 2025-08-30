const userString = prompt("Введите текст для обрезки").trim();
const startSliceIdx = Number(
	prompt("Введите индекс, с которого нужно начать обрезку строки").trim()
);
const endSliceIdx = Number(
	prompt("Введите индекс, которым нужно закончить обрезку строки").trim()
);

alert(`Результат: ${userString.slice(startSliceIdx, endSliceIdx)}`);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/qEdePJV