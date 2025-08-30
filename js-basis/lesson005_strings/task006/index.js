// const userText = prompt("Введите текст").trim();
// const fragmentOfText = prompt("Введите слово из текста").trim();

// const indexOfFragment = userText.indexOf(fragmentOfText);
// const resultString = userText.substring(indexOfFragment + 1);

// alert(`Результат: ${resultString}`);

// alt
// const userTextAlt = prompt("Введите текст").trim();
// const fragmentOfTextAlt = prompt("Введите слово из текста").trim();

// alert(
// 	userTextAlt.slice(userText.indexOf(fragmentOfText) + fragmentOfText.length)
// );

// final (upated)
const userText = prompt("Введите текст").trim();
const fragmentOfText = prompt("Введите слово из текста").trim();

const indexOfFragment = userText.indexOf(fragmentOfText);
const resultString = userText.slice(0, indexOfFragment);

alert(`Результат: ${resultString}`);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/JodgrqM