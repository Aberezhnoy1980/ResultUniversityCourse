// import { useState } from 'react';
import {
	useRequestGetProducts,
	useRequestAddVacuumCleaner,
	useRequestUpdadteSmartphone,
	useRequestDeleteHairDryer,
} from '../../hooks';
import styles from './JsonServerApp.module.css';
import { Loader } from '../../features/Loader';
import { ProductList } from './ProductList';

export const JsonServerApp = () => {
	// const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { products, setProducts, isLoading } = useRequestGetProducts();

	const { requestAddVacuumCleaner, isCreating } = useRequestAddVacuumCleaner(
		setProducts
	);

	const { requestUpdateSmartphone, isUpdating } = useRequestUpdadteSmartphone(
		setProducts
	);

	const { requestDeleteHairDryer, isDeleting } = useRequestDeleteHairDryer(
		setProducts
	);

	return (
		<div className={styles.app}>
			<h3>Работаем с JSON server</h3>
			{isLoading ? <Loader /> : <ProductList products={products} />}
			<button onClick={requestAddVacuumCleaner} disabled={isCreating}>
				Добавить пылесос
			</button>
			<button onClick={requestUpdateSmartphone} disabled={isUpdating}>
				Обновить смартфон
			</button>
			<button onClick={requestDeleteHairDryer} disabled={isDeleting}>
				Удалить фен
			</button>
		</div>
	);
};
