const web002Header = "Bind-Call-Apply methods";
console.log(
	`${"=".repeat(web002Header.length)}\n${web002Header}\n${"=".repeat(
		web002Header.length
	)}`
);

//
const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5,
};

const badHero = {
    fullName: 'Joker',
    health: 55,
    strength: 10,
};

function printHeroInfo(externalInfo = '') {
    console.log('this', this);
    console.log(`Имя: ${this.fullName}, Здоровье: ${this.health} Сила: ${this.strength}, ${externalInfo}`);
};

printHeroInfo();
// call, apply
printHeroInfo.call(badHero, 'Роль: Злодей');
printHeroInfo.apply(badHero, ['Роль: Злодей']);

// bind
const bindedPrintHero = printHeroInfo.bind(mainHero, 'Роль: Главный герой');
bindedPrintHero();