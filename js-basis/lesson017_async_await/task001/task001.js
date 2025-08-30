const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = () => {
	isLoading = true;
	fetch(POSTS_URL, { method: "POST" })
		.then((response) => response.json())
		.then((result) => {
			console.log("result", result);
		})
		.catch((error) => {
			console.log("error", error);
		})
		.finally(() => {
			isLoading = false;
		});
};
createNewPost();

// async/await синтаксис
const createNewPostAsyncAwait = async () => {
	isLoading = true;
	try {
		const response = await fetch(POSTS_URL, { method: "POST" });
		if (!response.ok) throw new Error("Ошибка чтения данных с сервера");
		console.log("Результат функции async/await", await response.json());
	} catch {
		console.error;
	} finally {
		isLoading = false;
	}
};
createNewPostAsyncAwait();

// Ради эксперимента
(async () => {
	console.log(
		"Анонимная самовызываемая функция",
		await (await fetch(POSTS_URL, { method: "POST" })).json()
	);
})();

// https://codepen.io/bxzcnzcb-the-typescripter/pen/ogjPErK