import { useState } from 'react';

export const MyImmutComponent = () => {
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });

	// setObj({ a: 20, b: 20, c: 30 });
	if (obj.a === 10) setObj({ ...obj, a: 20 });

	return <div>{obj.a}</div>;
};
