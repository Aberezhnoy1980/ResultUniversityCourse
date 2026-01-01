export const MessageWithLoggingAndColor = ({ Message, color, ...props} ) => {
	console.log(props.user);

	return (
		<span style={{ color }}>
			<Message {...props} />
		</span>
	)
}
