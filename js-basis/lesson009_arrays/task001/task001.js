const peopleWaiting = [
	"Кристина",
	"Олег",
	"Кирилл",
	"Мария",
	"Светлана",
	"Артем",
	"Глеб",
];

const giveParcel = (queue) => {
	alert(
		`${queue.shift()} получил(а) посылку. В очереди осталось ${
			queue.length
		} человек.`
	);
};

const leaveQueueWithoutParcel = (queue) => {
	alert(`${queue.pop()} не получил(а) посылку и ушел(ла) из очереди`);
};

for (let i = 0; peopleWaiting.length > 0; i++) {
	i <= 2 ? giveParcel(peopleWaiting) : leaveQueueWithoutParcel(peopleWaiting);
}

// https://codepen.io/bxzcnzcb-the-typescripter/pen/PwPwBjd
