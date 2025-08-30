const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// Исходная функция
const getTodosByIds = (ids) => {
	const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
	Promise.all(requests)
		.then((responses) => {
			const DataResult = responses.map((data) => data.json());
			return Promise.all(DataResult);
		})
		.then((allTasks) => {
			console.log(allTasks);
		})
		.catch((error) => {
			console.log(error);
		});
};
// getTodosByIds([43, 21, 55, 100, 10]);

// async/await
const getTodosByIdsAsynAwait = async (ids) => {
	try {
		const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
		const responses = await Promise.all(requests);
		const allTasks = await Promise.all(
			responses.map((data) => data.json())
		);
		console.log("allTasks", allTasks);
	} catch (error) {
		console.log(error);
	}
};

getTodosByIdsAsynAwait([43, 21, 55, 100, 10]);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/XJmPEry