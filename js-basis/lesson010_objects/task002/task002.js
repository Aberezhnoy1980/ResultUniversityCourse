const giveTalonsInOrder = (people, order) => {
	const result = [];
	for (let i = 0; i < people.length; i++) {
		result[i] = people[order[i] - 1];
	}
	return result;
};

const orderArr = [4, 2, 1, 3];
const people = [
	{
		id: 1,
		name: "Максим",
	},
	{
		id: 2,
		name: "Николай",
	},
	{
		id: 3,
		name: "Ангелина",
	},
	{
		id: 4,
		name: "Виталий",
	},
];

const result = giveTalonsInOrder(people, orderArr);
console.log("result", result);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/yyYaQJg