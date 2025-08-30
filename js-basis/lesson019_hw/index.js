console.log("Hello World!");
import jsImg from './assets/javaScript.jpeg';

const headerEl = document.createElement('h1');
headerEl.textContent = 'I love JavaScript'
document.body.append(headerEl);

const imgEl = document.createElement('img');
imgEl.src = jsImg;
document.body.append(imgEl);
