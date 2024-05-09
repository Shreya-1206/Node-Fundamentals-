import {EventEmitter} from 'events';

const emitter = new EventEmitter;

function notififyConnection(ipAddress) {
   console.log(`Connection made with - `+ipAddress)
}

async function processConnections(ip) {

   console.log(`Yes sucessfully conntected ${ip} 💻 `)
}
emitter.on('connection', notififyConnection);
emitter.on('connection', processConnections);

emitter.emit('connection', '122:33:45');
emitter.emit('connection', '023:22:09');

