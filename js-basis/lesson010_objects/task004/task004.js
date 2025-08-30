// const giveJodToStudent = (student, jobName) => {
//     student['job'] = jobName;
//     // student.jobName = jobName;
//     alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${student.job}`)
//     return student;
// };

const giveJodToStudent = (student, jobName) => {
    const newStudent = {...student, job: jobName};
    alert(`Поздравляем! У студента ${newStudent.fullName} появилась новая работа! Теперь он ${newStudent.job}`)
    return newStudent;
};

// alt
const giveJodToStudent1 = (student, jobName) => {
    Object.assign(student, {job: jobName});
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${student.job}`)
};

const student = {
	fullName: "Максим",
	experienceInMonth: 12,
	stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJodToStudent(student, 'веб-разработчик');
console.log(updatedStudent);
giveJodToStudent1(student, 'разработчик');

// https://codepen.io/bxzcnzcb-the-typescripter/pen/PwPGxzM