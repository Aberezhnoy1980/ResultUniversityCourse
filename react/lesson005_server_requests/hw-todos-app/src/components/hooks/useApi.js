import { useState, useEffect } from 'react';

export const useApi = (apiFunction) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const result = await apiFunction();
				setData(result);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [apiFunction]);

	return { data, isLoading, error };
};
