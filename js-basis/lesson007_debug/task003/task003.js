// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13; // эта переменная может быть константой
// let totalJuniorDevelopersSalary;
// // предположительно не инициирована сумма. Здесь знаяение пременной undefined
// console.log(totalJuniorDevelopersSalary);
  
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//    debugger; // посмотрим на расчет суммы
//    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//    totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

// исправления
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
const taxPercentage = 13;
let totalJuniorDevelopersSalary = 0; // избавляемся от undefined
console.log(totalJuniorDevelopersSalary);
  
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   debugger; // посмотрим на расчет суммы
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/bNVbqYr