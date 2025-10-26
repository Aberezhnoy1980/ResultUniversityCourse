import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestDeleteHairDryer = (setIsLoading) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteHairDryer = () => {
		setIsLoading(true);
		setIsDeleting(true);

		const hairdryerDbRef = ref(db, 'products/003');

		remove(hairdryerDbRef)
			.then((deletedProduct) => {
				console.log('Фен успешно удален, ответ сервера:', deletedProduct);
			})
			.finally(() => {
				setIsDeleting(false);
				setIsLoading(false);
			});
	};

	return { requestDeleteHairDryer, isDeleting };
};
