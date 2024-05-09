export class Publisher{
    constructor(){

    }

    greetings(eventEmitter){
      eventEmitter.emit('greetings',"Hey I need Some Data 🙂")
    }
}