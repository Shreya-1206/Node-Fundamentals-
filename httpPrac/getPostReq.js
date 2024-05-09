import http from 'http';
import url from 'url';

http.createServer(function(req, res) {
    if(req.method === 'GET'){
        res.write("Yeah it is Get Request");
    }else if(req.method === 'POST') {
        let body = "";

        req.on("data", function(data){
            body = body+data;
        });

        req.on("end", function(){
            body= JSON.parse(body);
            console.log(body);
        })
    }
    res.end();
}).listen(8000);   