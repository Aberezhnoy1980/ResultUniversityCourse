const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price += .5);

coffees.forEach((coffee, idx) =>
	alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[idx]} евро`)
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/ogjgaQL