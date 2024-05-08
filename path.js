import path from 'path';

var file = path.format({dir :"c:\\Users\\DELL\\Desktop\\JavascriptPrac", base : "hello.txt"});
console.log(file);
console.log(path.parse("c:\\Users\\DELL\\Desktop\\JavascriptPrac\\hello.text"));


//parsing through paths analyze it with a detail