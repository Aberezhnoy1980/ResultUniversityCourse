class Dictionary {
	constructor(name) {
		this.name = name;
		this.words = {};
	}

	add(word, description) {
		if (!(word in this.words)) this.words[word] = { word, description };
	}

	remove(word) {
		delete this.words[word];
	}

	get(word) {
		return this.words[word]
			? this.words[word]
			: `Слово ${word} в текущей версии словаря отсутствует`;
	}

	showAllWords() {
		for (let key in this.words) {
			console.log(
				`${this.words[key]["word"]} - ${this.words[key]["description"]}`
			);
		}
	}
}

class HardWordsDictionary extends Dictionary {
	add(word, description) {
		this.words[word] ??= { word, description, isDificult: true };
	}
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
	"дилетант",
	"Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
	"неологизм",
	"Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
	"квант",
	"Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

// https://codepen.io/bxzcnzcb-the-typescripter/pen/empvXwg