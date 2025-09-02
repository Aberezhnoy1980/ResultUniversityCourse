import { Component } from "../core/Component";

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement("div");
		this.$rootElement.className = "donates-container";
		this.$listContainer = document.createElement("div");
		this.$listContainer.className = "donates-container__donates";

		const $donatesContainerHeaderElement = document.createElement("h2");
		$donatesContainerHeaderElement.className = "donates-container__title";
		$donatesContainerHeaderElement.textContent = "Список донатов";

		this.$rootElement.append(
			$donatesContainerHeaderElement,
			this.$listContainer
		);

		this.$listContainer.addEventListener(
			"click",
			this.deleteItem.bind(this)
		);
	}

	addItem(item) {
		this.$listContainer.appendChild(item.$rootElement);
	}

	deleteItem(event) {
		event.preventDefault();

		if (event.target.className === "delete-button") {
			this.props.onClick(event.target.closest(".donate-item"));
		}
	}
}
