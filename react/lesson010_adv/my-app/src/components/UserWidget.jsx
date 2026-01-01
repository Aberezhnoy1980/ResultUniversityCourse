import { HelloMessage } from './HelloMessage';
import { GoodByeMessage } from './GoodByeMessage';
import { withLogging } from '../hocs/WithLogging';
import { withLoggingAndColor } from '../hocs/WithLoggingAndColor';
import { MessageWithLoggingAndColor } from './MessageWithLoggingAndColor';
import { ComponentWithLoggingAndColor } from './ComponentWithLoggingAndColor';

const HelloMessageWithLogging = withLogging(HelloMessage);
const RedHelloMessageWithLogging = withLoggingAndColor(HelloMessage, 'red');

// render props pattern
// export const UserWidget = ({ render, children, Message }) => {
export const UserWidget = () => {
	const user = 'Василий';
	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение:</div>
			{/* {render(user)} */}
			{/* {children(user)} */}
			{/* <Message user={user} /> */}
			<HelloMessageWithLogging user={user} />
			<br />
			<RedHelloMessageWithLogging user={user} />
			<br />
			<MessageWithLoggingAndColor
				Message={HelloMessage}
				color="green"
				user={user}
			/>
			<br />
			<ComponentWithLoggingAndColor color="orange" user={user}>
				<HelloMessage user={user}/>
			</ComponentWithLoggingAndColor>
			{/* <HelloMessage user={user} />
			<GoodByeMessage user={user} /> */}
		</div>
	);
};
