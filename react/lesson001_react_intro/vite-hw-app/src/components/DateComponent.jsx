// export default function Dater() {
// 	return (
// 		<span style={{ marginTop: '1rem', fontWeight: 'bold' }}>
// 			{new Date().getFullYear()}
// 		</span>
// 	);
// }

import { createElement } from 'react';

export default function Dater() {
	return createElement('span', {
		style: {
			marginTop: '1rem',
			fontWeight: 'bold',
		},
		children: new Date().getFullYear(),
	});
}
