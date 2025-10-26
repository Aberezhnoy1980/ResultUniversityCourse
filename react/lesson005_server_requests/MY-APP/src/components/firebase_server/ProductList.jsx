import styles from './FirebaseServerApp.module.css';

export const ProductList = ({ products }) => {
	return (
		<>
			{Object.entries(products).map(([id, { name, price }]) => (
				<div className={styles.item} key={id}>
					{name} - {price} руб
				</div>
			))}
		</>
	);
};
