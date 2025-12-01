import { useDispatch } from 'react-redux';
import { restartGame } from '../../actions/';
import { RestartBtnLayout } from '../../components';

export const RestartBtn = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(restartGame());
	};

	return <RestartBtnLayout onClick={handleRestart}>Новая игра</RestartBtnLayout>;
};
