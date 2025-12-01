import styles from './informationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ getContainerClass, children }) => {
	return (
		<div className={getContainerClass(styles)}>
			<span>{children}</span>
		</div>
	);
};

InformationLayout.propTypes = {
	getContainerClass: PropTypes.func,
	children: PropTypes.string,
};
