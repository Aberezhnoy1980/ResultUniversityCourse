const getDateFormat = (date, separator = ".") => {
	return `${
		date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
	}${separator}${
		date.getMonth() + 1 < 10
			? "0" + (date.getMonth() + 1)
			: date.getMonth() + 1
	}${separator}${date.getFullYear()}`;
};

const testDate = new Date(2001, 4, 5, 12, 0);

console.log(getDateFormat(testDate));
console.log(getDateFormat(testDate, "-"));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/gbawQRY
