const developerName = "Maksim";
const programmingLanguage = "JavaScript";

const programmingLanguages = {
	JavaScript: "JavaScript",
	nodeJS: "nodeJS",
};

if (programmingLanguage === programmingLanguages.JavaScript) {
	console.log(`${developerName} является Front-End разработчиком`);
} else if (programmingLanguage === programmingLanguages.nodeJS) {
	console.log(`${developerName} является Back-End разработчиком`);
} else {
	console.log(
		`Язык программимрования у разработчика ${developerName} неопределен)`
	);
}
