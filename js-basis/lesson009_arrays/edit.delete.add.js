// const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// Добавление элементов: push в конец, unshift в начало
const newSeniorDeveloperSalary = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002);
console.log(salariesOfDevelopers);

salariesOfDevelopers.unshift(100, 101, 102, 103);
console.log(salariesOfDevelopers);

// Удаление элементов: shift из начала, pop с конца
console.log(salariesOfDevelopers.shift());
salariesOfDevelopers.shift();
console.log(salariesOfDevelopers);

console.log(salariesOfDevelopers.pop());
console.log(salariesOfDevelopers);

// Изменение элементв массива
salariesOfDevelopers[4] = 6000;
console.log(salariesOfDevelopers);