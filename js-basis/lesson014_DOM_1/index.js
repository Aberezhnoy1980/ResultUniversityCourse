const taskBlock = document.getElementById('tasks');
console.log(taskBlock);

const allNavButtons = document.getElementsByClassName('main-navigation__button-item');
console.log(allNavButtons);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// querySelector
const tasksBlock = document.querySelector('#tasks');
console.log(tasksBlock);

const mainNavigation = document.querySelector('.main-navigation');
console.log(mainNavigation);

const firstButton = document.querySelector('button');
console.log(firstButton);

const thirdNavigationButton = document.querySelector('[data-button-id="3"]');
console.log(thirdNavigationButton);

// querySelectorAll
const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');
console.log(allNavigationButtons);
allNavigationButtons.forEach((button, index) => console.log(index, button));

const createTaskBlock = document.querySelector('.create-task-block');
const submitButton = createTaskBlock.querySelector('[type="submit"]');
console.log(submitButton);