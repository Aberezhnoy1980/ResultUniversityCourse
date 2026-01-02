import { ACTION_TYPES } from '../utils';

export const cellClick = (row, col) => ({
	type: ACTION_TYPES.CELL_CLICK,
	payload: { row, col },
});
