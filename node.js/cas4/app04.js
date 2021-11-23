// importiranje na event modul
/*
instanca
event emiteeri na dvata modula
kako moze events da komuniciraat preku dva moduli
*/
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register  a listener => /event/function
emitter.on('messageLogged', function (mssg) {
  console.log(mssg);
});


// Raise an event
setTimeout(() => {
  emitter.emit('messageLogged', 'Listener called');
}, 3000);
//emiter.emit();
