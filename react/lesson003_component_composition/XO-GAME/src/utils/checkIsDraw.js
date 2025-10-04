export const checkIsDraw = (field) => {
	return !field.some((row) => row.includes(''));
};
