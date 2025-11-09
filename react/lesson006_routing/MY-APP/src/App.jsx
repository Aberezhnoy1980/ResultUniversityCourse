import { useState, useEffect } from 'react';
import {
	Routes,
	Route,
	NavLink,
	Outlet,
	useParams,
	useMatch,
	useNavigate,
	Navigate,
	useRoutes,
} from 'react-router-dom';
import styles from './App.module.css';

const database = {
	productList: [
		{ id: 1, name: 'Телевизор' },
		{ id: 2, name: 'Смартфон' },
		{ id: 3, name: 'Планшет' },
	],
	products: {
		1: { id: 1, name: 'Телевизор', price: 29900, amount: 15 },
		2: { id: 2, name: 'Смартфон', price: 13900, amount: 48 },
		3: { id: 3, name: 'Планшет', price: 18400, amount: 23 },
	},
};

const LOADING_TIMEOUT = 3000;

const fetchProductList = () => database.productList;

const fetchProduct = (id) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(database.products[id]);
		}, 2500);
	});

const MainPage = () => <div>Контент главной страницы</div>;
const Catalog = () => (
	<div>
		<h3>Каталог товаров</h3>
		<ul className={styles.productList}>
			{fetchProductList().map(({ id, name }) => (
				<li key={id}>
					<NavLink to={`product/${id}`}>{name}</NavLink>
				</li>
			))}
		</ul>
		<Outlet />
	</div>
);
const ProductNotFound = () => <div>Такой товар не существует</div>;
const ProductLoadError = () => (
	<div>Ошибка загрузки товара, попробуйте еще раз позднее</div>
);
const Product = () => {
	const [product, setProduct] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();
	const navigate = useNavigate();
	const urlMatchData = useMatch('/catalog/:type/:id');

	console.log(urlMatchData.params.type);

	useEffect(() => {
		setIsLoading(true);
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isProductLoaded) {
				navigate('/product-load-error', { replace: true });
			}
		}, LOADING_TIMEOUT);

		fetchProduct(params.id)
			.then((loadedProduct) => {
				isProductLoaded = true;

				if (!isLoadingTimeout) {
					if (!loadedProduct) navigate('/product-not-exists');
					setProduct(loadedProduct);
				}
			})
			.finally(() => setIsLoading(false));
	}, [params.id, navigate]);

	if (isLoading) return <Loader />;

	if (!product) return null;

	const { name, price, amount } = product;

	return (
		<div className={styles.productCard}>
			<h3>Товар - {name}</h3>
			<div>Цена - {price}</div>
			<div>На складе - {amount}</div>
		</div>
	);
};
const Contacts = () => <div>Контент контактов</div>;
const NotFound = () => <div>Такая страница не существует</div>;
const Loader = () => <div className={styles.loader}></div>;

const ExtendedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span>{children}</span>
					<span>🍎</span>
					<span children="*" /> {/* что таоке children еще раз */}
				</>
			) : (
				'Главная'
			)
		}
	</NavLink>
);

function App() {
	const routes = useRoutes([
		{ path: '/', element: <MainPage /> },
		{
			path: '/catalog',
			element: <Catalog />,
			children: [
				{ path: 'product/:id', element: <Product /> },
				{ path: 'service/:id', element: <Product /> },
			],
		},
		{ path: '/contacts', element: <Contacts /> },
		{ path: '/product-load-error', element: <ProductLoadError /> },
		{ path: '/product-not-exists', element: <ProductNotFound /> },
		{ path: '/404', element: <NotFound /> },
		{ path: '*', element: <Navigate to="/404" replace={true} /> },
	]);
	return (
		<div className={styles.app}>
			<title>Магаз-приложка</title>
			<div>
				<h3 className={styles.header}>Меню</h3>
				<ol className={styles.rounded}>
					<li>
						<ExtendedLink to="/">Главная</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/catalog">Каталог</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/contacts">Контакты</ExtendedLink>
					</li>
				</ol>
			</div>
			{/* надо делать так! */}
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/catalog" element={<Catalog />}>
					<Route path="product/:id" element={<Product />} />
					<Route path="service/:id" element={<Product />} />
				</Route>
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/product-load-error" element={<ProductLoadError />} />
				<Route path="/product-not-exists" element={<ProductNotFound />} />
				{/* <Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" replace={true} />} /> */}
				{/* лучше, потому что пользователь будет видеть тот адрес, который он ввёл вместо /404, а значит сможет его исправить, если, например, опечатался */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			{/* {routes} можно и вот так! */}
		</div>
	);
}

export default App;
