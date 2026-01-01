export const withLoggingAndColor = (Component, color) => {
	const NewComponent = (props) => {
		console.log(props.user);

		return (
			<span style={{ color }}>
				<Component {...props} />
			</span>
		); // color: color
	};

	return NewComponent;
};
