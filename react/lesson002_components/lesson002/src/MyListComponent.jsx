const products = [
	{ id: 'qwe', name: 'Чайник' },
	{ id: 'rty', name: 'Утюг' },
];

export const MyListComponent = () => {
	return (
		<ul>
			{products.map((product) => (
				<li style={{textAlign: "center"}} key={product.id}>{product.name}</li>
			))}
		</ul>
	);
};
