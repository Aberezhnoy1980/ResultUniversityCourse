// createElement
const newnavButton = document.createElement('a');

newnavButton.className = 'main-navigation__button-item';
newnavButton.href = '#tasks_expired';
newnavButton.dataset.buttonId = '4';
newnavButton.textContent = 'Просроченные задачи';

// append, prepend
const mainNavigation1 = document.querySelector('.main-navigation');
// mainNavigation1.append(newnavButton);

console.log(newnavButton);

// insertAjacentElement
mainNavigation1.insertAdjacentElement('afterbegin', newnavButton);

// remove
// mainNavigation1.remove();

// closest
const taskItemText = document.querySelector('.task-item__text');
console.log(taskItemText);

const taskItem = taskItemText.closest('.task-item');
console.log(taskItem);

// classList: add, remove, toggle
firstNavigationButton.style.boxShadow = '';
firstNavigationButton.classList.add('main-navigation__button-item_selected');
firstNavigationButton.classList.remove('main-navigation__button-item_selected');

firstNavigationButton.classList.toggle('main-navigation__button-item_selected')
firstNavigationButton.classList.toggle('main-navigation__button-item_selected')

// attributes
const createTaskInput = document.querySelector('.create-task-block__input');
console.log(createTaskInput.hasAttribute('type'));
console.log(createTaskInput.hasAttribute('type_1'));

console.log(createTaskInput.getAttribute('value'));

createTaskInput.removeAttribute('placeholder');

createTaskInput.setAttribute('placeholder', 'Создать новую задачу');