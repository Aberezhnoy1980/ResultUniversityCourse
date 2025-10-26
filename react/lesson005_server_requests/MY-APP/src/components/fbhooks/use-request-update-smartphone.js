import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestUpdateSmartphone = (setIsLoading) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateSmartphone = () => {
		setIsLoading(true);
		setIsUpdating(true);

		const smatphoneDbRef = ref(db, 'products/002');

		set(smatphoneDbRef, {
			name: 'Смартфон',
			price: 212000,
		})
			.then((updatedProduct) => {
				console.log(
					'Смартфон успешно обновлен, ответ сервера: ',
					updatedProduct,
				);
			})
			.finally(() => {
				setIsUpdating(false);
				setIsLoading(false);
			});
	};

	return { requestUpdateSmartphone, isUpdating };
};
