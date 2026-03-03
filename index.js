import dateConvertion from './minitask-2.js';
import readline from 'node:readline/promises';

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let next = true;

  do {
    const answer = await rl.question('Masukkan tanggal / ketik "exit" untuk berhenti : ');
    if (answer.trim().toLowerCase() === 'exit') {
      console.log('Program Selesai');
      next = false;
    } else {
      const result = dateConvertion(answer);
      console.log(result);
    }
  } while (next);
  rl.close();
}

main();
