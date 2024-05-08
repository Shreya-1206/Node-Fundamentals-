import fs from 'fs';

console.log("Yes")
async function getFile(filename){
    const data = await fs.readFileSync(filename)

    console.log( data.toString());
}
console.log("no")
getFile('async.text');
console.log("maybe")