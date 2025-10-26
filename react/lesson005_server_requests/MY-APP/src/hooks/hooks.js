import { useEffect, useState } from 'react';

export const useRequestGetProducts = (refreshProducts) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3000/products')
			.then((rawResponse) => rawResponse.json())
			.then((response) => setProducts(response))
			.finally(() => setIsLoading(false));
	}, [refreshProducts]);

	return { products, isLoading };
};

export const useRequestAddVacuumCleaner = (refreshProducts, setRefreshProducts) => {
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
			.then((response) => {
				console.log('Пылесос добавлен, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsCreating(false));
	};

	return { requestAddVacuumCleaner, isCreating };
};

export const useRequestUpdadteSmartphone = (refreshProducts, setRefreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateSmartphone = () => {
		setIsUpdating(true);

		fetch('http://localhost:3000/products/002', {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				name: 'Смартфон',
				price: 15000,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Смартфон обновленб ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateSmartphone, isUpdating };
};

export const useRequestDeleteHairDryer = (refreshProducts, setRefreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteHairDryer = () => {
		setIsDeleting(true);

		fetch('http://localhost:3000/products/003', { method: 'DELETE' })
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удален, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteHairDryer, isDeleting };
};
