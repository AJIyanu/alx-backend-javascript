const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\r`);
  rl.close();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
