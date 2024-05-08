import { stdin } from 'process';
import readline from 'readline';
import process from 'process'

const r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('Whts Your Name ?', (name)=>{
    console.log(`Hey Your Namee is  - `+name);
    r1.close();
})

console.log(process.argv);