const web004Header = "keys webinar004";
console.log(
	`${"=".repeat(web004Header.length)}\n${web004Header}\n${"=".repeat(
		web004Header.length
	)}`
);

// ключ может быть string или Symbol. Прочие знаяение преобразуются в строку
const user = {
	name: "Maxim",
    10: '1234',
    undefined: undefined,
    [false]: false
};

console.log(Object.keys(user));

// Symbol
let testUser = {
    name: 'Maxim',
    name: 'Igor',
    name: 'Anton',
};

console.log('testUser', testUser);

const id = Symbol('id');
testUser[id] = 1;

console.log('testUser', testUser);

// Так перезапишется
testUser[id] = 2;
testUser[id] = 3;

console.log('testUser', testUser);

// А так добавится
testUser[Symbol('id')] = 1;
testUser[Symbol('id')] = 2;

console.log('testUser', testUser);

// Получить значение
testUser = {
    name: 'Maxim',
    [id]: 1,
}
console.log(testUser[id]);

// in
console.log('name' in testUser);
console.log('programmingLanguage' in testUser);
console.log(id in testUser);

const id2 = Symbol('id2');
console.log(id2 in testUser);