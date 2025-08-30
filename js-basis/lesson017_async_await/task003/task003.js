const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";

const renderAlbums = async (url) => {
	const dataContainer = document.createElement("ol");
	dataContainer.id = "data-container";
	document.body.append(dataContainer);

	const loader = document.createElement("span");
	loader.textContent = "Загрузка...";
	dataContainer.append(loader);

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("Ошибка загрузки данных");
		const albums = await response.json();
		albums.forEach((album) => {
			const albumEl = document.createElement("li");
			albumEl.textContent = album.title;
			dataContainer.append(albumEl);
		});
	} catch (error) {
		console.log(error);
		dataContainer.append(
			"Произошла ошибка в получении данных об альбомах..."
		);
	} finally {
		loader.style.display = "none";
	}
};

renderAlbums(ALBUMS_URL);
