let num = 13;
num = "Thirteen";
alert(`На текущий момент переменная 'num' имеет тип данных ${typeof num}`);

let text = "Twenty five";
text = 25;
alert(`На текущий момент переменная 'text' имеет тип данных ${typeof text}`);

let isSomethingHappening = false;
isSomethingHappening = null;
alert(
	`На текущий момент переменная 'isSomethingHappening' имеет тип данных ${typeof isSomethingHappening} (${isSomethingHappening === null ? 'null' : 'real object'})`
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/qEdemjj