import { useStore } from '../../../../hooks/useStore';

export const CurrentUser = () => {
	const { name } = useStore();

	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	);
};
