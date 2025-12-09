export const checkEnvVars = (requiredEnvVars) => {
	const missing = requiredEnvVars.filter((varName) => !import.meta.env[varName]);

	if (missing.length > 0) {
		const message = `Missing environment variables: ${missing.join(', ')}`;
		return { ok: false, message, missing };
	}

	return { ok: true, missing: [] };
};
