// Абстракция
// абстрактный класс с абстрактными классами. Реализация не определена - определен общий смысл или общее действие.
class Footballer {
	constructor(name, club) {
		this.name = name;
		this.club = club;
	}

	shoot() {}
	celebrateGoal() {}
	pass() {}
}

class Forward extends Footballer {
	constructor(name, club) {
		super(name, club);
	}

	shoot() {
		console.log("Очень сильный удар");
	}

	celebrateGoal() {
		console.log("Дааа! Я забил гол!");
	}

	pass() {
		console.log("Средненький пас");
	}
}

