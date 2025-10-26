import { useState } from 'react';
import {
	useRequestGetProducts,
	useRequestAddVacuumCleaner,
	useRequestUpdateSmartphone,
	useRequestDeleteHairDryer,
} from '../fbhooks';
import styles from './FirebaseServerApp.module.css';
import { Loader } from '../../features/Loader';
import { ProductList } from './ProductList';

export const FirebaseServerApp = () => {
	const [isLoading, setIsLoading] = useState(true);
	const products = useRequestGetProducts(setIsLoading);

	const { requestAddVacuumCleaner, isCreating } =
		useRequestAddVacuumCleaner(setIsLoading);

	const { requestUpdateSmartphone, isUpdating } =
		useRequestUpdateSmartphone(setIsLoading);

	const { requestDeleteHairDryer, isDeleting } =
		useRequestDeleteHairDryer(setIsLoading);

	return (
		<>
			<div className={styles.app}>
				<h3>Работаем с сервисом Firebase</h3>
				{isLoading ? <Loader /> : <ProductList products={products} />}
				<button onClick={requestAddVacuumCleaner} disabled={isCreating}>
					Добавить пылик
				</button>
				<button onClick={requestUpdateSmartphone} disabled={isUpdating}>
					Обновить смартфон
				</button>
				<button onClick={requestDeleteHairDryer} disabled={isDeleting}>
					Удалить фен
				</button>
			</div>
		</>
	);
};
