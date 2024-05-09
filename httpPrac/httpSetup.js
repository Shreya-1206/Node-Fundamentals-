import http from 'http';

http.createServer(function(req, res) {
    res.write("Hello I am From Server Side 🐣");
    res.end();
}).listen(8000);