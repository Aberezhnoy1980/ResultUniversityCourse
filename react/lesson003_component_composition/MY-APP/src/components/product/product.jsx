import PropTypes from 'prop-types';
import { useState } from 'react';
import { AddToBasket } from '../../components';
import styles from './product.module.css';

export const Product = ({ name, price, initialAmount }) => {
	const [amount, setAmount] = useState(initialAmount);

	return (
		<li className={styles.product}>
			{name} - {price} руб, кол-во: {amount} шт
			<AddToBasket amount={amount} limit={initialAmount} setAmount={setAmount} />
		</li>
	);
};

Product.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	initialAmount: PropTypes.number,
};
