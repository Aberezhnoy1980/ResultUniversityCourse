const web001Header = "Подсчет разницы времени";
console.log(
	`${"=".repeat(web001Header.length)}\n${web001Header}\n${"=".repeat(
		web001Header.length
	)}`
);

// getTime()
const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);

// Количество миллисекунд с 01 января 1970
console.log("date1", date1.getTime());
console.log("date2", date2.getTime());

const difference = date2.getTime() - date1.getTime();
console.log("difference", difference / 1000 / 60);

// Подсчет времени исполнения
const startTime = Date.now();

for (let i = 0; i < 1_000_000; i++) {
	// do something
}

const endTime = Date.now();
console.log('startTime', startTime);
console.log('endTime', endTime);

console.log(`diff ${endTime - startTime}`);