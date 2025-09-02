import { Component } from "../core/Component";

export class Form extends Component {
	setup(props) {
		this.$rootElement = document.createElement("form");
		this.$rootElement.className = "donate-form";

		this.$labelElement = document.createElement("label");
		this.$labelElement.className = "donate-form__input-label";
		this.$labelElement.textContent = "Введите сумму в $";

		this.$inpupElement = document.createElement("input");
		this.$inpupElement.className = "donate-form__donate-input";
		this.$inpupElement.name = "amount";
		this.$inpupElement.type = "number";
		this.$inpupElement.max = "100";
		this.$inpupElement.min = "1";
		this.$inpupElement.setAttribute("required", "");

		this.$buttonElement = document.createElement("button");
		this.$buttonElement.className = "donate-form__submit-button";
		this.$buttonElement.type = "submit";
		this.$buttonElement.disabled = true;
		this.$buttonElement.textContent = "Задонатить";

		this.$rootElement.append(
			this.$labelElement,
			this.$inpupElement,
			this.$buttonElement
		);

		this.$inpupElement.addEventListener(
			"input",
			this.handleInput.bind(this)
		);
		this.$rootElement.addEventListener(
			"submit",
			this.handleSubmit.bind(this)
		);
	}

	handleInput(event) {
		// console.log(event.target.value);
		this.state.amount = event.target.value;
		// console.log(this.isValid());

		this.isValid()
			? (this.$buttonElement.disabled = false)
			: (this.$buttonElement.disabled = true);
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.isValid()) {
			// console.log(this.state.amount);
      this.props.onSubmit(+this.state.amount);
			this.state.amount = "";
			this.$inpupElement.value = "";
		}
	}

	isValid() {
		return this.state.amount >= 1 && this.state.amount <= 100;
	}
}
