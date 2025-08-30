console.clear();

const developerNames = ['Maksim', 'Igor', 'Nastya', 'Irina'];

// for
// for (let i = 0; i < developerNames.length; i++) {
//     console.log(developerNames[i]);
// }

// for of
// for (const name of developerNames) {
//     console.log('name', name);
// }

// forEach - реклмендуется к использованию
developerNames.forEach((name, index, array) => console.log('name / index / array', name, index, array));