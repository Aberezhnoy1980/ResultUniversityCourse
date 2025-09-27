import { Label } from '../label/label';
import styles from './contacts.module.css';

export const Contacts = ({ email, phone }) => {
	return (
		<div className={styles.contacts}>
			<Label style="contactsLabel" color="red">
				Контакты
			</Label>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	);
};
