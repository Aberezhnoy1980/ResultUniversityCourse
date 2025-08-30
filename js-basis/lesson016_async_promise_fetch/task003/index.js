const PHOTOS_URL = "https://api.slingacademy.com/v1/sample-data/photos";

const dataContainer = document.createElement("ol");
dataContainer.id = "data-container";
document.body.append(dataContainer);

const loader = document.createElement("span");
loader.textContent = "Загрузка изображения..";
loader.setAttribute("hidden", "");
document.body.insertBefore(loader, document.body.firstElementChild);

const toggleLoader = () => {
	const isHidden = loader.hasAttribute("hidden");

	isHidden
		? loader.removeAttribute("hidden")
		: loader.setAttribute("hidden", "");
};

const createPhotoElement = (url, title) => {
	const photoItemEl = document.createElement("li");
	photoItemEl.style.listStyle = "none";
	photoItemEl.className = "photo-item";

	const imgEl = document.createElement("img");
	imgEl.className = "photo-item__image";
	imgEl.src = url;

	const titleEl = document.createElement("h3");
	titleEl.textContent = title;

	photoItemEl.append(imgEl, titleEl);

	return photoItemEl;
};

const getfastestLoadedPhoto = (ids) => {
	toggleLoader();
	const reqs = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`));
	Promise.race(reqs)
		.then((resp) => {
			return resp.json();
		})
		.then((resp) =>
			dataContainer.append(
				createPhotoElement(resp.photo.url, resp.photo.title)
			)
		)
		.catch((error) => console.log(error))
		.finally(() => toggleLoader());
};

getfastestLoadedPhoto([60, 12, 55]);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/xbwzPLE