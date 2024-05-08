import fs from 'fs';

console.log("Yes")
async function getFile(filename){
    const data = fs.promises.readFile(filename);

    console.log((await data).toString());
}
console.log("no")
getFile('async.text');
console.log("maybe")