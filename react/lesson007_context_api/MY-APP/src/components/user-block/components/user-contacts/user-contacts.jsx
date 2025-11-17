import { use } from 'react';
// import { AppContext } from '../../../../context';
import { UserDataContext } from '../../../../user-data-context';

export const UserContacts = () => {
	const { userData } = use(UserDataContext);
	const { email, phone } = userData;

	return (
		<div>
			<h3>Контакты пользователя:</h3>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	);
};
