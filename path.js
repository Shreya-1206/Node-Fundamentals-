import path from 'path';

var file = path.format({dir :"c:\\Users\\DELL\\Desktop\\JavascriptPrac", base : "hello.txt"});
console.log(path.parse(file));
console.log(path.parse("c:\\Users\\DELL\\Desktop\\JavascriptPrac\\hello.text"));
