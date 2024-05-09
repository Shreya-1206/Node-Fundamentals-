import http from 'http';

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type':"text/html"
    });
    res.write("Hello I am From Server Side 🐣"); //html content
    res.end();
}).listen(8000);