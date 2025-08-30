const handleObject = (obj, key, action) => {
	switch (action) {
		case "get":
			return obj[key];
		case "add":
			obj[key] = "";
			return obj;
		case "delete":
			delete obj[key];
			return obj;
		default:
			return obj;
	}
};

const student = {
	name: "Maxim",
	programmingLanguage: "JavaScript",
};

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('deleteResult', result);

// test
// add

const addResult = handleObject(student, 'programmingLanguage', 'add');
console.log('addResult', addResult);

// get
const getResult1 = handleObject(student, 'name', 'get');
console.log('getResult', getResult1);

const getResult2 = handleObject(student, 'programmingLanguage', 'get');
console.log('getResult', getResult2);

// any
const anyResult = handleObject(student, 'programmingLanguage', 'any');
console.log('anyResult', anyResult);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/azvmQZq