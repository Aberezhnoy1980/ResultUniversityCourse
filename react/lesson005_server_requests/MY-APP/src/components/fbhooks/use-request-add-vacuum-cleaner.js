import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestAddVacuumCleaner = (setIsLoading) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddVacuumCleaner = () => {
		setIsLoading(true);
		setIsCreating(true);

		const productsDbRef = ref(db, 'products');

		push(productsDbRef, {
			name: 'Новый пылесос',
			price: 5990,
		})
			.then((newProduct) => {
				console.log('Пылесос добавленб ответ сервера:', newProduct);
			})
			.finally(() => setIsCreating(false));
	};

	return { requestAddVacuumCleaner, isCreating };
};
