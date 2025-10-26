import { useState } from 'react';

// export const useRequestUpdadteSmartphone = (refreshProducts) => {
export const useRequestUpdadteSmartphone = (setProducts) => {
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
			.then((updatedProduct) => {
				console.log('Смартфон обновленб ответ сервера:', updatedProduct);
				// refreshProducts();
				setProducts((prevProducts) =>
					prevProducts.map((product) =>
						product.id === updatedProduct.id ? updatedProduct : product,
					),
				);
			})
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateSmartphone, isUpdating };
};
