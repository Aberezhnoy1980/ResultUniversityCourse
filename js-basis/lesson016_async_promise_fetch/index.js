const web0001Message = 'Разница между синхронным и асинхронным кодом';
console.log(`${'='.repeat(web0001Message.length)}\n${web0001Message}\n${'='.repeat(web0001Message.length)}`);

// Синхронный код
const numberOfElements = 50;
console.log('Cycle start');
for (let i = 0; i < numberOfElements; i++) {
    console.log('i', i);
}
console.log('Cycle end');

