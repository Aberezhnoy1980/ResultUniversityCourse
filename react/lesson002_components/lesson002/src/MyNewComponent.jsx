const getValue = () => 123;

export const MyNewComponent = () => {
	const value = 123;
	const className = 'divElement';
	const tagName = 'div';

	return (
		<>
		<br />
			<label htmlFor="">Значение</label>
			<div
				className={className + tagName + 'element'}
				style={{
					width: '100px',
					marginTop: '20px',
					marginLeft: 'calc(50% - 50px)',
					marginRight: 'calc(50% - 50px)',
				}}
			>
				{value + getValue()}
			</div>
		</>
	);
};
