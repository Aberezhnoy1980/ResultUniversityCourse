const clientsEstimations = [];

const askClientToGiveEstimation = (esimates) => {
	const customerEst = +prompt(
		"Как вы оцениваете нашу кофейню от 1 до 10?"
	).trim();
	if (
		// customerEst &&
		// !isNaN(customerEst) &&
		customerEst > 0 &&
		customerEst < 11
	)
		esimates.push(customerEst);
};

for (let i = 0; i < 5; i++) {
	askClientToGiveEstimation(clientsEstimations);
}

const goodEstimations = clientsEstimations.filter((est) => est > 5).length;
const notGoodEstimations = clientsEstimations.filter((est) => est <= 5).length;
alert(
	`Всего положительных оценок: ${goodEstimations};\nВсего отрицательных оценок: ${notGoodEstimations}`
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/vENEQEJ