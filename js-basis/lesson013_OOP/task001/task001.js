function StudentConstructor(name, age) {
	this.name = name;
	this.age = age;
	this.technologies = [];
	this.status = "Junior";

	this.setTechnologies = function (technologies) {
		this.technologies = [...this.technologies, ...technologies];
	};
	this.setNewStatus = function (newStatus) {
		this.status = newStatus;
	};
}

const student = new StudentConstructor("Maxim", 20);
student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewStatus("Middle");
console.log(student);

// class
class StudentClass {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.technologies = [];
		this.status = "Junior";
	}

	setTechnologies(technologies) {
		this.technologies = [...this.technologies, ...technologies];
	}

	setStatus(newStatus) {
		this.status = newStatus;
	}
}

const newStudent = new StudentClass("Alex", 25);
newStudent.setTechnologies(["Java", "Python"]);
newStudent.setStatus("Trainee");
console.log(newStudent);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/EaVWrjr