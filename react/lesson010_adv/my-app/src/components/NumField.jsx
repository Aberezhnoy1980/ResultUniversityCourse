import { memo } from 'react';

export const Field = memo(({ name, label, value, onChange }) => {
	console.log(name);
	// Сложный код, тяжелые вычисления

	return (
		<label>
			<span>{label}: </span>
			<input type="number" name={name} value={value} onChange={onChange} />
		</label>
	);
});
