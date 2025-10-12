import { passwordPatterns } from './passwordPatterns';

export const validatePassword = (password) => {
	const errors = [];

	if (!passwordPatterns.minLength.test(password)) {
		errors.push('минимум 8 символов');
	}
	if (!passwordPatterns.hasUpperCase.test(password)) {
		errors.push('хотя бы одна заглавная буква (A-Z)');
	}
	if (!passwordPatterns.hasLowerCase.test(password)) {
		errors.push('хотя бы одна строчная буква (a-z)');
	}
	if (!passwordPatterns.hasDigit.test(password)) {
		errors.push('хотя бы одна цифра (0-9)');
	}
	if (!passwordPatterns.hasSpecialChar.test(password)) {
		errors.push('хотя бы один спецсимвол (!@#$%^&* и т.д.)');
	}
	if (!passwordPatterns.noSpaces.test(password)) {
		errors.push('не должен содержать пробелов');
	}

	return errors;
};
