// Объявление
const name1 = 'Maksim';
const name2 = "Maksim";
const name3 = `Maksim`;
const name4 = new String(`Maksim`); // ?
console.log(name1, name2, name3, name4);

// Конкатенация
const name5 = 'Alex';
const profession = 'JavaScript-developer';

// const allInfo = name +' ' + profession;

// const allInfo = `${name} ${profession}`;

let allInfo = name5 + ' ';
allInfo += profession; // allInfo = allInfo + profession

console.log('allInfo', allInfo);

const anottherAllInfo = name5.concat(' ', profession);
console.log(anottherAllInfo);

// length
const programmingLanguage = 'JavaScript';
console.log(programmingLanguage.length);

console.log(programmingLanguage.charAt(0));
console.log(programmingLanguage[0]);
console.log(programmingLanguage.charCodeAt(0));