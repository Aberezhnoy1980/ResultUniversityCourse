const getDaysBeforeBirthday = (nextBirthdayDate) => {
	return convertMsToDays(nextBirthdayDate - Date.now());
};

function convertMsToDays(ms) {
	return Math.round(ms / 1000 / 60 / 60 / 24);
}

console.log(getDaysBeforeBirthday(new Date(2025, 11, 29)));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/JoYReyB
