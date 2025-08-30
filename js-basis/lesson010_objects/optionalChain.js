const web006Header = "Опциоинальная цепочка";
console.log(
	`${"=".repeat(web006Header.length)}\n${web006Header}\n${"=".repeat(
		web006Header.length
	)}`
);

//
console.log(developer.jobAllInfo.framework);

delete developer.jobAllInfo;
// console.log(developer.jobAllInfo.framework);

// 1
// if (developer.jobAllInfo.framework) {
if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
	console.log("Разработчик уже знает фреймворк");
} else {
	console.log("Разаработчик еще НЕ знает фреймвморк");
}

developer["jobAllInfo"] = {
	type: "Front-End",
	framework: "ReactJS",
};

if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
	console.log("Разработчик уже знает фреймворк");
} else {
	console.log("Разаработчик еще НЕ знает фреймвморк");
}

// Опциональная цепока
developer.jobAllInfo.framework = { name: "ReactJS" };
console.log(developer);

if (developer?.jobAllInfo?.framework?.name) {
	console.log("Разработчик уже знает фреймворк");
} else {
	console.log("Разработчик еще НЕ знает фреймворк");
}

delete developer.jobAllInfo;

if (developer?.jobAllInfo?.framework?.name) {
	console.log("Разработчик уже знает фреймворк");
} else {
	console.log("Разработчик еще НЕ знает фреймворк");
}

developer.jobAllInfo = {
	type: "Front-End",
	framework: {
		name: "ReactJS",
	},
};

console.log(developer);

const arr = [1, 2, 3];
console.log(arr);