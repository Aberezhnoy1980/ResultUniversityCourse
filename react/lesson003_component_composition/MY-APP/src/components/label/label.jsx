import styles from './label.module.css';

export const Label = ({ style, color, children }) => {
	return <label className={`${styles[style]} ${styles[color]}`}>{children}:</label>;
};
