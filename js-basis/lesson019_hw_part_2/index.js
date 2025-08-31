import jsImg from './assets/javaScript.jpeg';
import "./index.css";

console.log("Hello World!");

const headerEl = document.createElement('h1');
headerEl.textContent = 'I love JavaScript'
document.body.append(headerEl);

const imgEl = document.createElement('img');
imgEl.src = jsImg;
document.body.append(imgEl);
