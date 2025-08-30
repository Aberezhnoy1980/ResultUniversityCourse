const web004Header = "Promise.all()";
console.log(
	`${"=".repeat(web004Header.length)}\n${web004Header}\n${"=".repeat(
		web004Header.length
	)}`
);

// Promise.all() - похоже на транзакцию
// чистим предыдущую разметку. Сложный вариант
const observer = new MutationObserver((mutationsList, observer) => {
	for (const mutation of mutationsList) {
		if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
			// Переберите добавленные узлы
			for (const node of mutation.addedNodes) {
				// Если это элемент, проверьте его на соответствие вашему селектору
				if (node.nodeType === Node.ELEMENT_NODE && node.matches("li")) {
					const liEl = node;
					// console.log("Найден асинхронный элемент:", liEl);
					liEl.remove();
					// Здесь вы можете выполнить свои действия с найденным элементом
					// Например:
					// элемент.addEventListener('click', ...);

					// Отключите наблюдателя, если элемент нужен только один раз
					// observer.disconnect();
					break; // Выходим из внутреннего цикла, если нашли нужный
				}
			}
		}
	}
});

// Наблюдаем за изменениями в документе или конкретном контейнере
// observer.observe(document.body, { childList: true, subtree: true });
// observer.disconnect();

// Пробуем работать с асинхронно добавляемыми элементами через простой timeOut
// setTimeout(
// 	() => {document.querySelectorAll("li").forEach((liEL) => liEL.remove()); console.log('елемнты, созданные функцией getAllTodos() удалены');},
// 	5000
// );

const todosIds = [43, 10, 5, 100, 101];

const getTodosByIds = (ids) => {
	const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map((response) => response.json());
			return Promise.all(dataResults);
		})
		.then((todos) => {
			console.log("todos", todos);
			todos.forEach(todo => {
				dataContainer.append(createTodoElement(todo.title))
			})
		})
		.catch((error) => console.log(error));
};

// setTimeout(() => {getTodosByIds(todosIds); console.log('Выполнилась новая функция рендера элементов по списку id');}, 6000);
