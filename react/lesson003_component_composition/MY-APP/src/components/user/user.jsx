import { Contacts, Label } from '../../components';
import styles from './user.module.css';

export const User = ({ name, age, ...contacts }) => {
	// const { name, age, ...contacts } = props;
	return (
		<div className={styles.user}>
			<Label style="userLabel" color="green">
				Пользователь
			</Label>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<Contacts {...contacts} />
		</div>
	);
};
