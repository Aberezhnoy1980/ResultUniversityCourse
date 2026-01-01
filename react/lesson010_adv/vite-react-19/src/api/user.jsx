export const loginUser = async (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'user' && password === 'pass') {
				resolve({
					success: true,
					data: {
						username,
						email: 'user@example.com',
						token: '123',
					},
				});
			} else {
				reject({ success: false, error: 'Invalid credentials.' });
			}
		}, 1000);
	});
};
