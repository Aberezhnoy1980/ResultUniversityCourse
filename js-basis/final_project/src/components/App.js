import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
	setup(props) {
		this.state = { total: 0, donates: [] };
		this.$rootElement = document.createElement("div");
		this.$rootElement.className = "app";
		this.$total = document.createElement("span");
		this.$total.textContent = this.state.total;

		const $totalAmountHeader = document.createElement("h1");
		$totalAmountHeader.className = "total-amount";
		$totalAmountHeader.textContent = `Итого: $`;
		$totalAmountHeader.appendChild(this.$total);

		this.$rootElement.appendChild($totalAmountHeader);
		const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
		this.$rootElement.appendChild(donateForm.$rootElement);
		this.donateList = new List({ onClick: this.onItemDelete.bind(this) });
		this.$rootElement.appendChild(this.donateList.$rootElement);
	}

	onItemCreate(amount) {
		const item = new ListItem({ amount });
		this.state.donates.push(item);
		this.donateList.addItem(item);
		// this.$total.textContent = this.state.total += amount;
		this.$total.textContent = this.getDonatesSum();
	}

	onItemDelete(item) {
		const itemIdx = this.state.donates.findIndex(
			(element) => element.state.id === +item.id
		);
		// const deleteAmount = this.state.donates[itemIdx].state.amount;
		// this.$total.textContent = this.state.total -= deleteAmount;
		this.state.donates.splice(itemIdx, 1);
		this.$total.textContent = this.getDonatesSum();
		item.remove();
	}

	getDonatesSum() {
		return this.state.donates.reduce((acc, item) => {
			return acc + item.state.amount;
		}, 0);
	}
}
