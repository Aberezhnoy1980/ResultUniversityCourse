setTimeout(() => {
    console.log('setTimeout');
}, 0);

const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve()
});

promise.then(() => {
    console.log('Promise resolve');
});

console.log('End');

// Порядок вывода:
// 1. Promise (синхронный код внутри конструктора Promise -> инструкция макрозадачи call stack v8)
// 2. End (инструкция макрозадачи call stack v8)
// 3. Promise resolve (микрозадача -> microtasks queue webApi/libUV)
// 4. setTimeout (очередь вызовов -> callback queue webApi/libuv)

// https://codepen.io/bxzcnzcb-the-typescripter/pen/XJmPOqq