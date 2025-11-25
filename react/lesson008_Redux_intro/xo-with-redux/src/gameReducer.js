import { checkIsDraw, checkWin, fieldInit } from './utils';

export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: fieldInit(),
	winninfCells: [],
};

export const ACTION_TYPES = {
	CELL_CLICK: 'CELL_CLICK',
	RESTART_GAME: 'RESTART_GAME',
};

export const cellClick = (row, col) => ({
	type: ACTION_TYPES.CELL_CLICK,
	payload: { row, col },
});

export const restartGame = () => ({
	type: ACTION_TYPES.RESTART_GAME,
});

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.CELL_CLICK: {
			const { row, col } = action.payload;

			if (state.field[row][col] || state.isGameEnded) {
				return state;
			}

			const newField = state.field.map((fieldRow, rowIndex) =>
				fieldRow.map((cell, colIndex) =>
					rowIndex === row && colIndex === col ? state.currentPlayer : cell,
				),
			);

			const winResult = checkWin(newField, state.currentPlayer);
			if (winResult?.isWin) {
				return {
					...state,
					field: newField,
					isGameEnded: true,
					winninfCells: winResult.cells,
				};
			}

			if (checkIsDraw(newField)) {
				return {
					...state,
					field: newField,
					isDraw: true,
				};
			}

			return {
				...state,
				field: newField,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
			};
		}

		case ACTION_TYPES.RESTART_GAME: {
			return {
				...initialState,
				field: fieldInit(),
			};
		}

		default:
			return state;
	}
};
