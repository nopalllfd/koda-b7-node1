import dateConvertion from './minitask-1.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.setPrompt('Masukkan tanggal / ketik "exit" untuk keluar : ');
rl.prompt();
rl.on('line', (line) => {
  if (line.trim().toLowerCase() === 'exit') {
    rl.close();
  } else {
    line.toString();
    (function () {
      const convert = dateConvertion(line);
      console.log(convert);
    })();
    rl.prompt();
  }
});
