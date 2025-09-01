const myNumber = 42;

// localStorage.removeItem("number");
// console.log(localStorage.getItem("number"));
// localStorage.setItem("number", myNumber); // toString() localStorage работает только со строками
// console.log(localStorage.getItem("number"));

// localStorage.clear();

// const obj = {
// 	name: "Max",
// 	age: 20,
// };

// localStorage.setItem('person', JSON.stringify(obj));
// const raw = localStorage.getItem('person');
// raw.name = 'Vlad';

// console.log(typeof raw);

// const person = JSON.parse(raw);
// person.name = 'Vlad';
// console.log(person);

// =============
window.addEventListener('storage', event => {
    console.log(event);
})

// window.onstorage = () => {}