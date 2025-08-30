const student = {
    id: 1,
	programmingLanguage: "JavaScript",
	hasExperienceReact: false,
};

// add
student.experience = 6;
console.log('student', student);

// delete
delete student.hasExperienceReact;
console.log('student', student);

// edit
student.experience = 12;
console.log('student', student);

student.id = 2;
console.log('student', student);