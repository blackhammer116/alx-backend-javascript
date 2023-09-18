/*
const readline = require('readline');
const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");
read.on('line', (input) => {
	console.log(`Your name is: ${input}`);
	read.close();
});
read.on('close', (input) => {
	if (process.stdin.isTTY) {
		console.log('This important software is now closing');
	}
})
process.on('SIGINT', () => {
	console.log('This important software is now closing');
	process.exit(0);
});
process.on('SIGTERM', () => {
	console.log('This important software is now closing');
	process.exit(0);
});
*/
process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.once('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});
process.on('SIGINT', () => {
  console.log('This important software is now closing');
});
process.on('SIGTERM', () => {
  console.log('This important software is now closing');
});
