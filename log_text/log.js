import fs from 'fs'

export function writeLog(filename, line){
   fs.writeFile(filename, line, err => {
        if(err){
            console.error(err);
        }
    })
   
}

export function readFile(filename){
    const read = fs.readFile(filename, 'utf8', (err, data) => { 
        if(err){
            console.error(err);
        }else{
            console.log(data.toString());
        }
    })
    return read
}

export function appendWriteFile(filename, line){
    const append = fs.appendFile(filename, line, function(err){
        if(err){
            console.error(err);
        }
    })
    return append;
}
