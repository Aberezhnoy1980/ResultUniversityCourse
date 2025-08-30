const tasksWrapper = document.querySelector('.tasks__wrapper');
console.log(tasksWrapper.className);

tasksWrapper.className = 'tasks__wrapper_1';
console.log(tasksWrapper.className);

const tasksBlock1 = document.querySelector('#tasks');
console.log(tasksBlock1.id);

// tasksBlock1.id = 'new_tasks';
// console.log(tasksBlock1.id);

const createButton = document.querySelector('.create-task-block__button');
console.log(createButton.innerText);
console.log(createButton.textContent);

createButton.textContent = 'Создать новую задачу';
createButton.innerHTML = '<b>Создать новую задачу</b>';

// innerHTML
console.log(tasksBlock1.innerHTML);
// tasksBlock1.innerHTML = '<b>TasksBlock</b>';

// children
const createTaskForm = document.querySelector('.create-task-block');
console.log(createTaskForm.children);

// data-атрибуты
const firstNavigationButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavigationButton.dataset.buttonId);

// атрибут data после "-" идут литералы названия, например data-btn-main-id. Тогда при обращении от dataset название парсится в camelCase: btnMainId

firstNavigationButton.dataset.buttonId = 10;

// style
console.log(firstNavigationButton.style);
firstNavigationButton.style.fontWeight = 'bold';
firstNavigationButton.style.boxShadow = 'inset 0 0 0 3px #fff';