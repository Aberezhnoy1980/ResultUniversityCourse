import Select from 'react-select';
import styles from './SelectFromLib.module.css';

const productOptions = [
	{ value: 'tv', label: 'Телевизор' },
	{ value: 'smartphone', label: 'Смартфон' },
	{ value: 'laptop', label: 'Ноутбук' },
];

const colorsOptions = [
	{ value: 'black', label: 'Черный' },
	{ value: 'silver', label: 'Серебристый' },
	{ value: 'white', label: 'Белый' },
];

export const SelectFromLib = () => {
	return (
		<div className={styles.selectApp}>
			<Select
				options={productOptions}
				defaultValue={productOptions[0]}
				onChange={(selected) => console.log(selected.value)}
			/>
			<Select
				isMulti
				options={colorsOptions}
				defaultValue={[colorsOptions[0], colorsOptions[1]]}
			/>
		</div>
	);
};
