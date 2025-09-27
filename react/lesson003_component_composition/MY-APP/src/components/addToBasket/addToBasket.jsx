import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './addToBasket.module.css';

export const AddToBasket = ({ amount, limit, setAmount }) => {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.addSection}>
			<button
				className={styles.addBtn}
				onClick={() => {
					setCount((count) => {
						return amount > 0 ? count + 1 : count;
					});
					setAmount((amount) => {
						return amount > 0 ? amount - 1 : 0;
					});
				}}
			>
				+
			</button>
			<div>{count}</div>
			<button
				className={styles.rmBtn}
				onClick={() => {
					setCount((count) => {
						return count > 0 && amount < limit ? count - 1 : count;
					});
					setAmount((amount) => {
						return amount < limit ? amount + 1 : limit;
					});
				}}
			>
				-
			</button>
		</div>
	);
};

AddToBasket.propTypes = {
	amount: PropTypes.number,
	limit: PropTypes.number,
	setAmount: PropTypes.func,
};
