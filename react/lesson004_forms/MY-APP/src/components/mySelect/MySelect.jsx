import { useState } from 'react';
import styles from './MySelect.module.css';

export const MySelect = () => {
	const [selectedProduct, setSelectedProduct] = useState('tv');
	const [selectedColors, setSelectedColors] = useState(['black', 'silver']);

	const onSelectedProductChange = ({ target }) => setSelectedProduct(target.value);
	const onSelectedColorsChange = ({ target }) => {
		const newSelectedColors = [...target.selectedOptions].map(
			(selectedTarget) => selectedTarget.value,
		);

		setSelectedColors(newSelectedColors);
	};

	return (
		<div className={styles.selectApp}>
			<select value={selectedProduct} onChange={onSelectedProductChange}>
				<option value="tv">Телевизор</option>
				<option value="smartphone">Смартфон</option>
				<option value="laptop">Ноутбук</option>
			</select>
			<select
				multiple={true}
				value={selectedColors}
				onChange={onSelectedColorsChange}
			>
				<option value="black">Черный</option>
				<option value="silver">Серебристый</option>
				<option value="white">Белый</option>
			</select>
		</div>
	);
};
