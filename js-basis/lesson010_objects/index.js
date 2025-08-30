// Создание объекта
const developer = {
	name: "Maksim",
	job: "Frontend developer",
	experience: 24,
	jobAllInfo: {
		type: "Frontend",
		framework: "ReactJS",
	},
};
console.log('developer', developer);

// Получение значени по ключу 1 (рекомендуется)
console.log('name', developer.name);
console.log('jobAllInfo', developer.jobAllInfo);

// 2 способ
console.log('name', developer['name']);

const key = 'name';
console.log('name', developer[key]);

// Цепочки
console.log('type', developer.jobAllInfo.type);

console.log('framework', developer['jobAllInfo']['framework']);

