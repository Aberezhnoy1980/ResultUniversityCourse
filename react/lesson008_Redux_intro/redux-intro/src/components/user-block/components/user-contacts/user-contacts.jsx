import { useStore } from "../../../../hooks/useStore";

export const UserContacts = () => {
	const { email, phone } = useStore();

	return (
		<div>
			<h3>Контакты пользователя:</h3>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	);
};
