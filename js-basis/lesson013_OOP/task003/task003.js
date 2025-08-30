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
		// alt
		// for (let word of Object.values(this.words))
		// 	console.log(Object.values(word).join(" - "));
	}
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "Популярный язык программирования");
dictionary.add(
	"Веб-разработчик",
	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
dictionary.add("JavaScript", "Это просто набор букв");
dictionary.showAllWords();
console.log(dictionary.get("Веб-разработчик"));

dictionary.remove("JavaScript");
dictionary.showAllWords();

// https://codepen.io/bxzcnzcb-the-typescripter/pen/vENxPar