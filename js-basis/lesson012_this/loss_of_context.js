const web003Header = "Потеря контекста";
console.log(
	`${"=".repeat(web003Header.length)}\n${web003Header}\n${"=".repeat(
		web003Header.length
	)}`
);

const anotherUser = {
	name: "Maxim",
	programmingLanguage: "JavaScript",
	getName() {
		return this.name;
	},
	getProgrammingLanguage() {
		return this.programmingLanguage;
	},
};

console.log(anotherUser.getName());

const newGetName = anotherUser.getName;

// Потеря контекста
console.log("newGetName", newGetName.call(anotherUser)); // window

// Второй случай
console.log(anotherUser.getProgrammingLanguage());

// У стрелочной фунуции нет своего this и определить его с помощью call, apply, bind не получится
anotherUser.getProgrammingLanguage = () => {
	return this.programmingLanguage;
};

console.log(anotherUser.getProgrammingLanguage());

anotherUser.getProgrammingLanguage = function () {
	console.log(this);
	return this.programmingLanguage;
};

console.log(anotherUser.getProgrammingLanguage());

function f() {
	console.log(this);
}

f();