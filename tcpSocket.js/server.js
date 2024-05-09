import net from 'net';

const server = net.createServer( function(socket){
   socket.write("Server is Connected 🤖");

   socket.on('data', function(data){
    console.log(`Request from client - ${data}`)
   })

   socket.on('error', function(error){  // here its helps to get rifd of the unknow error from client if it gets diconnected 
    console.error(`Error Occured - ${error}`)
   });

   socket.on('close', function(){
    console.log("Client Disconnected ❎");
   })
});

server.listen(8080, ()=>{
    console.log("Server is Listening 💁");
})