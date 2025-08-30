const addDays = (date, days) => {
	return new Date(date.getTime() + days * 24 * 3600000);
};

console.log(`Добавим три дня к текущей дате: ${addDays(new Date(), 3)}`);
console.log(
	`Когда на работу после новогодних каникул: ${addDays(
		new Date(2026, 0, 1),
		14
	)}`
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/empdQee
