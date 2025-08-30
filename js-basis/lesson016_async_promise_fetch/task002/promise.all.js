const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const dataContainer = document.querySelector("#data-container");

const createUserElement = (name) => {
	const userItemElement = document.createElement("li");
	const userItemAnchorElement = document.createElement("a");
	userItemAnchorElement.href = "#";
	userItemAnchorElement.textContent = name;

	userItemElement.append(userItemAnchorElement);

	return userItemElement;
};

const toggleLoader = () => {
	const loader = document.querySelector("#loader");
	const isHidden = loader.hasAttribute("hidden");

	isHidden
		? loader.removeAttribute("hidden")
		: loader.setAttribute("hidden", "");
};

const getUsersByIds = (ids) => {
	toggleLoader();
	const reqs = ids.map((id) => fetch(`${USERS_URL}/${id}`));
	Promise.all(reqs)
		.then((resps) => {
			const respsData = resps.map((resp) => resp.json());
			return Promise.all(respsData);
		})
		.then((users) =>
			users.forEach((user) =>
				dataContainer.append(createUserElement(user.name))
			)
		)
		.catch((error) => console.log(error))
		.finally(toggleLoader());
};

getUsersByIds([5, 6, 2, 1]);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/JoYZrLP