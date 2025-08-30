console.log("Webinar002");
// 7 - примитивы
// 1 - не примитив - объект (ссылочный тип)
const setName = (entity, value) => {
	if (typeof entity === "object") {
		entity.name = value;
	} else {
		entity = value;
	}
};

// Объект developer был ранее объявлен в других скриптах, подключенных к html
// const developer = {
//     name: 'Maxim',
// };

let developerName = "Maxim";

setName(developer, "Max");
setName(developerName, "Max");

// console.log("developer", developer.name);
// console.log("developerName", developerName);

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy);

// console.log({} === {});
// console.log([] === []);

console.log('hello' === 'hello');
console.log(5 === 5);