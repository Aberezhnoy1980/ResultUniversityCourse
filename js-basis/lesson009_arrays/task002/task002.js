function getSumOfSequence(number) {
	const arr = Array(number);
	for (let i = 0; i < arr.length; i++) arr[i] = ++i;
	return arr.at(-1) + 1; // так как первый элемент всегда 1
}

console.log(getSumOfSequence(5));

// alt
function getSumOfSequence2(number) {
	let edgeElementsSum = 0;
	const arr = [];
	for (let i = 0; i < number; i++) {
		arr.push(i + 1);
		if (i === 0 || i === number - 1) edgeElementsSum += arr[i];
	}
    console.log(edgeElementsSum);
}

getSumOfSequence2(5);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/dPYPjKd