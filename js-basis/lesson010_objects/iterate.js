const header = "Iterate webinar003";
console.log(
	`${"=".repeat(header.length)}\n${header}\n${"=".repeat(header.length)}`
);

//
const goodInfo = {
	id: 1,
	price: 80,
	currency: "$",
	name: "shoes",
};

console.log("goodInfo", goodInfo);

// for in
for (const key in goodInfo) {
	console.log("key", key);
	const value = goodInfo[key];
	console.log("value", value);
}

// Object.keys
const keys = Object.keys(goodInfo);
// console.log(...keys);
console.log('keys', keys);

// Object.values
const values = Object.values(goodInfo);
// console.log('values', values);
console.log(...values);

// Object.entries
const entries = Object.entries(goodInfo);
console.log('entries', entries);
console.log('entries price value: ', entries[1][1]);