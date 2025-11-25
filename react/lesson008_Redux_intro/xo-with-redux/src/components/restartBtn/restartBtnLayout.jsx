import styels from './restartBtnLayout.module.css';
import PropTypes from 'prop-types';

export const RestartBtnLayout = ({ onClick, children }) => {
	return (
		<button className={styels.restart} onClick={onClick}>
			{children}
		</button>
	);
};

RestartBtnLayout.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
