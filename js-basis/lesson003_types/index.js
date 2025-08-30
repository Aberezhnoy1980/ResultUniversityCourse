// 1. string
const favoriteDrink = "Coffee";
console.log(favoriteDrink);

// 2. number
const numberOfCups = 5;
console.log(numberOfCups);

// 3. boolean
const isColdDrink = true;
console.log(isColdDrink);

// 4. null - пусто, значение не изветстно
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

// 5. undefined - значение не было присвоено
let carOwner;
console.log(carOwner);

carOwner = "Maksim";
console.log(carOwner);

carOwner = undefined;
console.log(carOwner);

// 6. object
const drink = {
	favoriteDrink: "Coffee",
	numberOfCups: 5,
	isColdDrink: true,
};

console.log(drink);

// symbol
const id = Symbol('id');
console.log(id);

// bigint
const bigintNumber = BigInt(10);
console.log(bigintNumber);

console.log(typeof 14n);

// Бывают 
// 1. Примитивы
// 2. Не примитивы (сложные - object) - ссылочные (java)?
