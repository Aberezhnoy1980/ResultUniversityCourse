import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { loginUser } from './api/user';
import './App.css';

function Button() {
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending}>
			{pending ? 'Logging in...' : 'Login'}
		</button>
	);
}

function App() {
	// const [username, setUsername] = useState(''); // before react@19
	// const [password, setPassword] = useState(''); // before react@19
	const [state, submitAction, isPending] = useActionState(handleAction, {
		user: null,
		error: null,
	});
	// const [user, setUser] = useState(null); // before react@19
	// const [error, setError] = useState(null); // before react@19
	// const [isPending, setIsPending] = useState(false); // before react@19

	// const handleSubmit = async (e) => { // before react@19
	async function handleAction(prevState, formData) {
		// console.log(formData); // what is formdata - simple browser API

		// e.preventDefault(); // before react@19

		// setIsPending(true); // before react@19
		// setUser(null); // before react@19
		// setError(null); // before react@19

		const username = formData.get('username');
		const password = formData.get('password');

		try {
			const response = await loginUser(username, password);
			// setUser(response.data); // before react@19
			return { user: response.data, error: null };
		} catch (error) {
			// setError(error.error); // before react@19
			return { user: null, error: error.error };
		} finally {
			// setIsPending(false); // before react@19
		}
	}

	return (
		// <form onSubmit={handleSubmit}> // before react@19
		<form action={submitAction}>
			<div>
				<label>Username:</label>
				<input
					type="text"
					name="username"
					// value={username} // before react@19
					// onChange={(e) => setUsername(e.target.value)} // before react@19
					required
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					name="password"
					// value={password} // before react@19
					// onChange={(e) => setPassword(e.target.value)} // before react@19
					required
				/>
			</div>
			{/* before react@19 */}
			{/* <button type="submit" disabled={isPending}>
				{isPending ? 'Logging in...' : 'Login'}
			</button> */}
			<Button />
			{/* before react@19 */}
			{/* {user && <p style={{ color: 'green' }}>Loggin in: {user.email}</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>} */}
			{state.user && (
				<p style={{ color: 'green' }}>Loggin in: {state.user.email}</p>
			)}
			{state.error && <p style={{ color: 'red' }}>{state.error}</p>}
		</form>
	);
}

export default App;
