import { useEffect, useState } from 'react';

// export const useRequestGetProducts = (refreshProductsFlag) => {
export const useRequestGetProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3000/products')
			.then((rawResponse) => rawResponse.json())
			.then((response) => setProducts(response))
			.finally(() => setIsLoading(false));
		// }, [refreshProductsFlag]);
	}, []);

	// return { products, isLoading };
	return { products, setProducts, isLoading };
};
