import fs from 'fs';

async function getFile(filename){
    const data = fs.promises.readFile(filename);

    console.log((await data).toString());
}

getFile('async.text');