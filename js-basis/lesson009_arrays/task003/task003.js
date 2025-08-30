const coffees = ["Latte", "Cappuccino", "Americano"];

const coffeeName = prompt("Поиск кофе по названию:", "Введите название")
	.trim()
	.toLowerCase();

const isCoffeeExists = coffees.some((coffee) => {
	return coffee.toLowerCase() === coffeeName;
});

const findCoffeeIdx = (coffees, coffeeName) => {
	return coffees.findIndex((coffee) => coffee.toLowerCase() === coffeeName);
};

isCoffeeExists
	? alert(
			`Держите ваш любимый кофе ${
				coffees[findCoffeeIdx(coffees, coffeeName)]
			}. Он ${
				findCoffeeIdx(coffees, coffeeName) + 1
			}-й по популярности в нашей кофейне.`
	  )
	: alert("К сожалению, такого вида кофе нет в наличии");

// https://codepen.io/bxzcnzcb-the-typescripter/pen/dPYPgVY
