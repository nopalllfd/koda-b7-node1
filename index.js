import dateConvertion from './minitask-1.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukan tanggal : ', (date) => {
  const convert = dateConvertion(date);
  console.log(convert);
  rl.close();
});
