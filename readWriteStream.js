import fs from 'fs';

const readStream = fs.createReadStream('async.text');

readStream.on("data", function(chunks)  {
    console.log(chunks.toString());
})

const writeStream = fs.createWriteStream('write.text');

writeStream.write("Hello From Write Stream 😀\n");
writeStream.write("HI am Testing the performance writing in chunks ☀️!!\n");
writeStream.write("Thank You Bbye 🥀\n");