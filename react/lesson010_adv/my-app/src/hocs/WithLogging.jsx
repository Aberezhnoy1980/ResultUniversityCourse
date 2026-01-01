export const withLogging = (Component) => {
	const NewComponent = (props) => {
		console.log(props.user);

		return <Component {...props} />;
	};

	return NewComponent;
};
