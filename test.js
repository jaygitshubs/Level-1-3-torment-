const prompt = require(`prompt-sync`)();

const operations = ['+', '-', '*', '/'];
const randomIndex = Math.floor(Math.random() * 10);
const randomOp = operations[randomIndex];

console.log(`Your random operation is: ${randomOp}`);