import { sum } from "./main";
import reactIcon from './react-2.svg'
import './index.css';


const array = [1, 2, 3].map(i => i + 1);

function hello(...args) {
	console.log("####: Hello Rollup!", args[0], args[1]);
}

const imgEl = document.createElement('img');
imgEl.src = reactIcon;
imgEl.width = '200';
document.body.append(imgEl);

hello(sum(1, 2), array);
console.log(reactIcon);