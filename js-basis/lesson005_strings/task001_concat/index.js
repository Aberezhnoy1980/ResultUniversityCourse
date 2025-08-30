const myName = "Александр";
const programmingLanguage = "JavaScript";
const schoolName = "Result University";
const reasonText = "хочу стать профкссионалом в отрасли";
const numberOfMonth = 1;

const statement = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} в ${schoolName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. Я уверен, что пройду данный курс до конца!`;

console.log(statement);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/PwqMJbB

let myInfoText = statement
	.replaceAll("JavaScript", "JavaScript".toLowerCase())
	.replaceAll("курс", "курс".toUpperCase());
console.log(
	`${myInfoText}\nLength of text: ${
		myInfoText.length
	} symbols\nFirst symbol: ${myInfoText.charAt(0)}, last symbol: ${
		myInfoText[myInfoText.length - 1]
	}`
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/JodgrrN
