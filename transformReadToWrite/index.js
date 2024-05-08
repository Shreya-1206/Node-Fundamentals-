import fs from 'fs';
import {Transform} from 'stream';

const fsReadStream = fs.createReadStream('logRead.text');
const fsWriteStream = fs.createWriteStream('logWrite.text');

const transform = new Transform({
    transform(chunks, encoding, callback){
        callback(null, chunks.toString().toUpperCase());
    }
});

fsReadStream.pipe(transform).pipe(fsWriteStream);

