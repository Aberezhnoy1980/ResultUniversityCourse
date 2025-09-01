import { getRandomColor } from "./utils";

export default function iniApp() {
    // console.log("Hello, World!");

    const changeColorButtonElement = document.createElement("button");
    changeColorButtonElement.className = "button";
    changeColorButtonElement.textContent = "Изменить цвет страницы";

    document.body.append(changeColorButtonElement);

    changeColorButtonElement.addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomColor();
    })
}