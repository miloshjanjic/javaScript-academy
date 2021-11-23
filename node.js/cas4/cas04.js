const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// EventEmitter node znae deka e klasa
// isntanca od klasata za da koristime metodi od nea

// Listener
eventEmitter.on('logger', (respondData) => {
  console.log('Message logged.', respondData);
});

// Raise an event
// eventEmitter.emit('logger'); //antena koja moze da emituva

// Prvo odat Listenerite koga se pisuvaat i emiterot i listenerot vo ist fajl
eventEmitter.on('room21', (argEvent) => {
  // console.log(Array.isArray(argEvent));
  // console.log(typeof argEvent === 'object');
  // // console.log();
  // console.log(typeof argEvent);
  if (argEvent instanceof Object) {
    console.log(`Message recevied ${JSON.stringify(argEvent)}`)
  }
  // if (Array.isArray(argEvent)){
  // argEvent.forEach(item =>{
  //   eventEmitter.emit('logger',item);
  //   // console.log('Item',item);
  // });
});
//   console.log(`Message recevied ${JSON.stringify(argEvent)}`);
//   console.log('Class:',argEvent.class)
// });

// eventEmitter.emit('room21',{
//   subject : 'javaScript Node.js'
//   class:'Modules',
//   lecture : '4',
//   students : 14,
//   mentor : 'Daniel Peshevski'
// });

const messageData = {
  subject: 'javaScript Node.js',
  class: 'Modules',
  lecture: '4',
  students: 14,
  mentor: 'Daniel Peshevski'
}
const messagesData = [
  {
    subject: 'javaScript Node.js',
    class: 'Modules',
    lecture: '4',
    students: 14,
    mentor: 'Daniel Peshevski'
  },
  {
    subject: 'javaScript Node.js',
    class: 'Modules',
    lecture: '4',
    students: 14,
    mentor: 'Daniel Peshevski'
  }]

eventEmitter.emit('room21', messageData); 