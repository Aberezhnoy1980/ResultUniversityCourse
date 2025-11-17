import { use } from 'react';
// import { useContext } from 'react';
import { UserDataContext } from '../../../../user-data-context';

export const CurrentUser = () => {
	// до react 19
	// const { name } = useContext(AppContext);
	const { userData } = use(UserDataContext);
	const { name } = userData;

	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	);
};
