import http from 'http';
import url from 'url';

http.createServer(function(req, res) {
    const q= url.parse(req.url, true);  //url details
    console.log(q.query);    //query it  
    res.writeHead(200, {
        'Content-Type':"text/html"
    });
    res.write("Hello I am From Server Side 🐣"); //html content
    res.end();
}).listen(8000);   