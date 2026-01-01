import { connect /* useDispatch */ } from 'react-redux';
import { changeUserAsync, increaseAge, RESET_AGE } from '../../actions';

export const ControlPanelContainer = ({ onAgeIncrease, onAgeReset, onUserChange }) => {
	// const dispatch = useDispatch();

	// const onAgeIncrease = () => {
	// 	dispatch(increaseAge(3));
	// };

	// const onAgeReset = () => {
	// 	dispatch(RESET_AGE);
	// };

	// const onUserChange = () => {
	// 	dispatch(changeUserAsync);
	// };

	return (
		<div>
			<button onClick={onAgeIncrease}>Увеличить возраст</button>
			<button onClick={onAgeReset}>Сбросить возраст</button>
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onAgeIncrease: () => dispatch(increaseAge(3)),
	onAgeReset: () => dispatch(RESET_AGE),
	onUserChange: () => dispatch(changeUserAsync),
});

export const ControlPanel = connect(null, mapDispatchToProps)(ControlPanelContainer);
