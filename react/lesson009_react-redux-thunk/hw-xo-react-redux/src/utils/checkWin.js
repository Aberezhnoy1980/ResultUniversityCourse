export const checkWin = (field, symb) => {
	let leftDiagCount = 0;
	const leftDiagIdxs = [];
	let rightDiagCount = 0;
	const rightDiagIdxs = [];

	for (let i = 0; i < field.length; i++) {
		let rowCount = 0;
		const rowIdxs = [];
		let colCount = 0;
		const colIdxs = [];

		if (field[i][i] === symb) {
			leftDiagCount++;
			leftDiagIdxs.push([i, i]);
		}
		if (field[i][field.length - 1 - i] === symb) {
			rightDiagCount++;
			rightDiagIdxs.push([i, field.length - 1 - i]);
		}
		for (let j = 0; j < field[i].length; j++) {
			if (field[i][j] === symb) {
				rowCount++;
				rowIdxs.push([i, j]);
			}
			if (field[j][i] === symb) {
				colCount++;
				colIdxs.push([j, i]);
			}
		}
		if (rowCount === field.length) return { isWin: true, cells: rowIdxs };
		if (colCount === field.length) return { isWin: true, cells: colIdxs };
	}
	if (leftDiagCount === field.length) return { isWin: true, cells: leftDiagIdxs };
	if (rightDiagCount === field.length) return { isWin: true, cells: rightDiagIdxs };
};
