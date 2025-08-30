// number
const age = 44;
console.log(
	`Переменная 'const age = 44;'\nТип: ${typeof age}, значение: ${age}`
);
const positiveInf = Infinity;
console.log(
	`Переменная 'const positiveInf = Infinity;'\nТип: ${typeof positiveInf}, значение: ${positiveInf}`
);
const negativeInf = -Infinity;
console.log(
	`Переменная 'const negativeInf = -Infinity;'\nТип: ${typeof negativeInf}, значение: ${negativeInf}`
);
const notNumber = NaN;
console.log(
	`Переменная 'const notNumber = NaN;'\nТип: ${typeof notNumber}, значение: ${notNumber}`
);

// string
const userName = "Aleksandr";
console.log(
	`Переменная 'const userName = 'Aleksandr';'\nТип: ${typeof userName}, значение: ${userName}`
);

// boolean
const isStudent = true;
console.log(
	`Переменная 'const isStudent = true;'\nТип: ${typeof isStudent}, значение: ${isStudent}`
);

// BigInt
const lessonComplited = 2n;
console.log(
	`Переменная 'const lessonComplited = 2n;'\nТип: ${typeof lessonComplited}, значение: ${lessonComplited}`
);

// Symbol
const id = Symbol("id");
console.log(
	`Переменная 'const id = Symbol('id');'\nТип: ${typeof id}, значение: ${
		id.description
	}`
); // Или toString() для явного приведения (авто недоступно) для печати

// null
const resultUDiploma = null;
console.log(
	`Переменная 'const resultUDiploma = null;'\nТип: ${typeof resultUDiploma}, значение: ${resultUDiploma}`
); // Исключение

// undefined
const unused = undefined;
let uninitiatedVar;
console.log(
	`Переменная 'const unused = undefined;'\nТип: ${typeof unused}, значение: ${unused}`
);
console.log(
	`Переменная 'let uninitiatedVar;'\nТип: ${typeof uninitiatedVar}, значение: ${uninitiatedVar}`
);

// object
const profile = {
	name: "Aleksandr",
	age: 44,
	isStudent: true,
	lessonComplited: 2n,
	resultUDiploma: null,
	grade: undefined,
};

for (const key in profile) {
	console.log(
		`Свойство ${key}, тип: ${typeof profile[key]}, значение: ${
			profile[key]
		}`
	);
}

// https://codepen.io/bxzcnzcb-the-typescripter/pen/EajqmZg?editors=1111