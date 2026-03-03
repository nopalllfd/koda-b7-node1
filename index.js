import dateConvertion from './minitask-1.js';
import readline from 'node:readline/promises';

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let running = true;

  while (running) {
    const answer = await rl.question('Masukkan tanggal / ketik "exit" untuk berhenti : ');

    if (answer.trim().toLowerCase() === 'exit') {
      console.log('Program Selesai');
      running = false;
    } else {
      const result = await dateConvertion(answer);
      console.log(result);
    }
  }
  rl.close();
}

main();
