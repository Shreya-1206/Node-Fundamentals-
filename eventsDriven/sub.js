export class Subscriber{
    constructor(eventEmitter){
      eventEmitter.on('greetings', data =>{
        console.log(data);
      })
    }
}