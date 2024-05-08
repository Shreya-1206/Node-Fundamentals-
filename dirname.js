 /// this __dirname can be used in comman js not on es scricpt
// console.log(__dirname); 


//way to do in es script 
import * as url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
console.log(__dirname);   //used for ascessing dir 
