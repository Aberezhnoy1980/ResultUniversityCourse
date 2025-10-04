import styels from './restartBtnLayout.module.css';

export const RestartBtnLayout = ({ onClick, children }) => {
	return (
		<button className={styels.restart} onClick={onClick}>
			{children}
		</button>
	);
};
