import fs from 'fs';

console.log("Something Before")
fs.readFile('async.text', function(err, data){
    if(err){
        console.error(err);
    }else {
        console.log(data.toString());
    }
});

console.log("Something After")