const currentDevelopers = ['Maxim', 'Oleg'];
const newDevelopers = ['Anton', 'Gleb'];

// concat
const allDevelopers = currentDevelopers.concat(newDevelopers);
console.log(allDevelopers);

// spread
const anotherAllDevelopers = [...currentDevelopers, ...newDevelopers];
console.log(anotherAllDevelopers);

// Просто тренировки
const arr = [1, 2, 3];
arr[5] = 16;
console.log(arr);
arr[1] = 504;
console.log(arr);

const arr2 = [1, 2, 3, 4];
console.log(arr2.some(el => el > 2));
console.log(arr2.every(el => el >= 1));

const arr3 = arr2;
console.log(arr3);
arr3[0] = 100;
console.log(arr2);