import fs from 'fs';
import * as csv from 'csv-parse';

fs.createReadStream('file.csv')
 .pipe(csv.parse({delimiter : ','}))
 .on("data", function(row){
    console.table(row);
 })