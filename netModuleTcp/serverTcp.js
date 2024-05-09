import net from 'net';

const server = net.createServer( function(){
   console.log("Server is Connected 🤖");
});

server.listen(8080, ()=>{
    console.log("Server is Listening 💁");
})