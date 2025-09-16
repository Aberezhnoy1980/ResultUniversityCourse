import { useState } from 'react';

export const MyStateComponent2 = () => {
	const [rndValue, setrndValue] = useState(Math.random());

	setTimeout(() => {
		setrndValue(Math.random());
	}, 1000);

	return <div>{rndValue.toFixed(2)}</div>;
};
