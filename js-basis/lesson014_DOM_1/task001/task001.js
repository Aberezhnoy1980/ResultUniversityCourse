// innerHTML
const firstSolutionBlock = document.createElement("div");
firstSolutionBlock.classList.add("first-solution__wrapper");

// Что бы до тега script разместился блок. Append для body (document.body.append(...)) поставит блок после тега script
document.querySelector("pre").after(firstSolutionBlock);
firstSolutionBlock.insertAdjacentHTML('beforebegin', '<hr>');
firstSolutionBlock.insertAdjacentHTML('beforebegin', '<h3>1-ый способ решения: через innerHTML</h3>')
firstSolutionBlock.innerHTML = `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`;

// document.createElement()
const secondSolution = document.createElement("div");
secondSolution.classList.add("second-solution__wrapper");

const formElement = document.createElement("form");
formElement.classList.add("create-user-form"); // пользовался конструкцией classList.add до этого (вместо className = '..')
const firstLabelElement = document.createElement("label");
firstLabelElement.textContent = " Имя ";

const firstInputElement = document.createElement("input");

firstInputElement.type = "text";
firstInputElement.name = "userName";
firstInputElement.placeholder = "Введите ваше имя";

const secondLabelElement = document.createElement("label");
secondLabelElement.textContent = " Пароль ";

const secondInputElement = document.createElement("input");

secondInputElement.type = "password";
secondInputElement.name = "password";
secondInputElement.placeholder = "Придумайте пароль";

const buttonElement = document.createElement("button");
buttonElement.type = "submit";
buttonElement.textContent = " Подтвердить ";

document.querySelector(".first-solution__wrapper").after(secondSolution);
secondSolution.insertAdjacentHTML('beforebegin', '<hr>')
secondSolution.insertAdjacentHTML('beforebegin', '<h3>2-ой способ решения: через document.createElement()</h3>')
secondSolution.append(formElement);
formElement.append(firstLabelElement, secondLabelElement, " ", buttonElement);
firstLabelElement.append(firstInputElement);
secondLabelElement.append(secondInputElement);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/PwPKEdV