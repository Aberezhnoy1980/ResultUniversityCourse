export const passwordPatterns = {
	minLength: /^.{8,}$/,
	hasUpperCase: /[A-Z]/,
	hasLowerCase: /[a-z]/,
	hasDigit: /\d/,
	hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
	noSpaces: /^\S*$/,
};
