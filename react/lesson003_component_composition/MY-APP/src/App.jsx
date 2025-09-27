import { User, Label, Product, AddToBasket } from './components';
import styles from './App.module.css';

const getUserFromServer = () => ({
	name: 'Иван',
	age: 25,
	email: 'ivan@mail.ru',
	phone: '+7 999-999-99-99',
});

const getProductFromServer = () => [
	{
		id: 1,
		name: 'Bicycle',
		price: 1000,
		amount: 5,
	},
	{
		id: 2,
		name: 'Notebook',
		price: 1500,
		amount: 3,
	},
	{
		id: 3,
		name: 'GameConsole',
		price: 800,
		amount: 8,
	},
];

export const App = () => {
	const user = getUserFromServer();
	const products = getProductFromServer();
	return (
		<div className={styles.App}>
			<Label style="appLabel">Приложение</Label>
			<div>Разная информация приложения</div>
			{/* <User
				name={user.name}
				age={user.age}
				email={user.email}
				phone={user.phone}
			/> */}
			<User {...user} /> {/* это не деструктуризация!!! */}
			<Label style="productLabel" color="blue">
				Продукт
			</Label>
			<ul className={styles.productList}>
				{products.map((product) => (
					<Product
						key={product.id}
						name={product.name}
						price={product.price}
						initialAmount={product.amount}
					></Product>
				))}
			</ul>
		</div>
	);
};
