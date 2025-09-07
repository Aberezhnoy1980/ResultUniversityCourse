export default function Dater() {
	return (
		<span style={{ marginTop: '1rem', fontWeight: 'bold' }}>
			{new Date().getFullYear()}
		</span>
	);
}
