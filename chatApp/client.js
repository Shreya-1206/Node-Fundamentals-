import net from 'net';
import readline from 'readline';

const r1 =readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const usernameIn= new Promise((resolve) => {
    r1.question('Enter your username : ', (username) => {
        resolve(username)
    })
})

usernameIn
 .then((username)=>{
     const client = net.connect({port : 8080}, function(){
        console.log("Now connect to the sever !!")
     })

     r1.on('line', function(data){
        client.write(username + ":" + data);
     })

     client.on("data", function(data){
        console.log(data.toString())
     });

     client.on('error', function(err){
        console.error(err);
     });
 })
