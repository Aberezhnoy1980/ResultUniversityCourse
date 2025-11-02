export const checkEnvVars = (requiredEnvVars) => {
	requiredEnvVars.forEach((varName) => {
		if (!import.meta.env[varName])
			throw new Error(`Missing environment variable: ${varName}`);
	});
};
