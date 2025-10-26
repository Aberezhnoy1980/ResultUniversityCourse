import { useState } from 'react';

// export const useRequestAddVacuumCleaner = (refreshProducts) => {
export const useRequestAddVacuumCleaner = (setProducts) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddVacuumCleaner = () => {
		setIsCreating(true);

		fetch('http://localhost:3000/products', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				name: 'Новый пылесос',
				price: 4690,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newProduct) => {
				console.log('Пылесос добавлен, ответ сервера:', newProduct);
				// refreshProducts();
				setProducts((prevProducts) => [...prevProducts, newProduct]);
			})
			.finally(() => setIsCreating(false));
	};

	return { requestAddVacuumCleaner, isCreating };
};
