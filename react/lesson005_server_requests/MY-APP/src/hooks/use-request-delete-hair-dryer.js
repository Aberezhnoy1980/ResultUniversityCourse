import { useState } from 'react';

// export const useRequestDeleteHairDryer = (refreshProducts) => {
export const useRequestDeleteHairDryer = (setProduct) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteHairDryer = () => {
		setIsDeleting(true);

		fetch('http://localhost:3000/products/003', { method: 'DELETE' })
			// .then((rawResponse) => rawResponse.json())
			.then(() => {
				console.log('Фен удален');
				// refreshProducts();
				setProduct((prevProducts) =>
					prevProducts.filter((product) => product.id !== '003'),
				);
			})
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteHairDryer, isDeleting };
};
