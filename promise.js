import fs from 'fs';

console.log("something before ")
const getFile = function (filename) {
      const promise= new Promise((reject, resolve) => {
         fs.readFile(filename, function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data.toString());
            }
         })
      })
      return promise;
}
console.log("something between")
getFile('async.text')
.then((data) => console.log(data))
.catch((err) => console.log(err))
console.log("something after")
