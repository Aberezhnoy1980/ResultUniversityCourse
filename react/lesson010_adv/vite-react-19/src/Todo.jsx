import { useState, useOptimistic } from 'react'; // hook "useOptimistic"

export const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [optimisticTodos, setOptimisticTodos] = useOptimistic(
		todos,
		(prevState, state) => {
			return [...prevState, { text: state, pending: false }];
		},
	);

	const handleAddTodo = async (formData) => {
		const newTodo = formData.get('todo');

		setOptimisticTodos(newTodo);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		setTodos((currentTodos) => [
			...currentTodos,
			{ text: newTodo, pending: false },
		]);
	};

	return (
		<div>
			<h2>Todo List</h2>
			{optimisticTodos.map((todo, idx) => (
				<div key={idx}>
					{todo.text}
					{todo.pending && <spn> (Adding...)</spn>}
				</div>
			))}
			<form action={handleAddTodo}>
				<input type="text" name="todo" placeholder="Enter todo..." />
				<button type="submit">Add todo</button>
			</form>
		</div>
	);
};
