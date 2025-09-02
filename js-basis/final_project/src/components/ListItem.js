import { Component } from "../core/Component";

export class ListItem extends Component {
	setup(props) {
		this.state = {
			id: Date.now(),
			date: new Date(),
			amount: props.amount,
		};
		this.$rootElement = document.createElement("div");
		this.$rootElement.className = "donate-item";
		this.$rootElement.id = this.state.id;
		this.$rootElement.innerHTML = this.getDonateItemExpression(
			this.state.date
		);

		const $boldElement = document.createElement("b");
		$boldElement.textContent = `$${this.state.amount}`;
		this.$rootElement.append($boldElement);

		const $deleteButton = document.createElement("button");
		$deleteButton.className = "delete-button";
		$deleteButton.textContent = "Удалить";
		this.$rootElement.appendChild($deleteButton);
	}

	// вариант без библиотеки (moment)
	getDonateItemExpression(date) {
		const expression = {
			date: `${String(date.getDate()).padStart(2, "0")}/${String(
				date.getMonth() + 1
			).padStart(2, "0")}/${date.getFullYear()}`,
			time: `${String(date.getHours()).padStart(2, "0")}:${String(
				date.getMinutes()
			).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`,
		};

		return `${expression.date}, ${expression.time} -\u00A0`;
	}
}
