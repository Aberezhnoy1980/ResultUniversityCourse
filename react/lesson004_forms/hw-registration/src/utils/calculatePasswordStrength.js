import { passwordPatterns } from './passwordPatterns';

export const calculatePasswordStrength = (password) => {
	if (password?.length === 0) return '';

	const requirementsMet = [
		passwordPatterns.minLength.test(password),
		passwordPatterns.hasUpperCase.test(password),
		passwordPatterns.hasLowerCase.test(password),
		passwordPatterns.hasDigit.test(password),
		passwordPatterns.hasSpecialChar.test(password),
		passwordPatterns.noSpaces.test(password),
	].filter(Boolean).length;

	if (requirementsMet <= 2) return 'слабый';
	if (requirementsMet <= 4) return 'средний';
	return 'сильный';
};
