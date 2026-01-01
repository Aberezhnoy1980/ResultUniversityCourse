export const ComponentWithLoggingAndColor = ({ children, color, ...props}) => {
	console.log(props.user);

	return (
		<span style={{ color }}>
			{children}
		</span>
	)
}
