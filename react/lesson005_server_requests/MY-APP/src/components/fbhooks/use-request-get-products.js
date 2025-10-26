import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';

export const useRequestGetProducts = (setIsLoading) => {
	const [products, setProducts] = useState({});

	useEffect(() => {
		const productsDbRef = ref(db, 'products');

		return onValue(productsDbRef, (snapshot) => {
			const loadedProducts = snapshot.val();

			setProducts(loadedProducts || {});
			setIsLoading(false);
		});
	}, []);

	return products;
};
