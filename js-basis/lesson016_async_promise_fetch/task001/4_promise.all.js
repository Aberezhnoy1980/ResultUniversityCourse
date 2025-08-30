const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const createUserElement = (name) => {
	const userElement = document.createElement("li");
	const userElementAnchor = document.createElement("a");
	userElementAnchor.href = "#";
	userElementAnchor.textContent = name;
	userElement.append(userElementAnchor);

	return userElement;
};

const toggleLoader = () => {
	const loader = document.querySelector("#loader");
	const isHidden = loader.hasAttribute("hidden");

	isHidden
		? loader.removeAttribute("hidden")
		: loader.setAttribute("hidden", "");
};

const dataContainer = document.querySelector("#data-container");

const getAllUsers = () => {
    toggleLoader();
	const result = fetch(USERS_URL);

	result
		.then((response) => {
			if (!response.ok) throw new Error("Ошибка запроса");
			return response.json();
		})
		.then((users) => {
			users.forEach((user) => {
				dataContainer.append(createUserElement(user.name));
			});
		})
		.catch((error) => {
			console.log("error", error.message);
		})
		.finally(toggleLoader());
};

getAllUsers();

// https://codepen.io/bxzcnzcb-the-typescripter/pen/vENrywx