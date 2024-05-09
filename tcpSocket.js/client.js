import net from 'net';

const client = net.connect({port : 8080}, function(){
    client.write("Hello Server 😄")
});

client.on('data', function(data){
    console.log(`Response from server - ${data}`)
});

client.on('error', function(err){
    console.log(`Error : ${err}`)
})