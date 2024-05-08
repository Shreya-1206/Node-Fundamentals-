import fs from 'fs';
import * as csv from 'csv-parse';

const readDetails = fs.createReadStream('bankDetails.csv');
let sum =0
readDetails
 .pipe(csv.parse({delimiter : ','}))
 .on('data', (row) => {
    sum += parseInt(row[1])
    
 })
 .on('end', () => {
    console.log(`Sum of total transaction - ${sum}`);
    console.log('CSV file successfully processed');
 });
