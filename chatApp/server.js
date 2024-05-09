import net from 'net';

let sockets =[];

function boardCast(data){
  sockets.forEach((socket)=>{
    socket.write(data);
  })
}

const server = net.createServer(function(socket){
    sockets.push(socket);

    socket.on('data', function(data){
        boardCast(data)
    });

    socket.on('error', function(err){
        console.error(err);
    })
})

server.listen(8080, function(){
    console.log('Sever Listening ....')
})