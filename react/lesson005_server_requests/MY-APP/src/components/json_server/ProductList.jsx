import styles from './JsonServerApp.module.css';

export const ProductList = ({ products }) => {
	return (
		<>
			{products.map(({ id, name, price }) => (
				<div className={styles.item} key={id}>
					{name} - {price} руб
				</div>
			))}
		</>
	);
};
