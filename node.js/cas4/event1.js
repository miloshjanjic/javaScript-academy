const events = require('events');

const em = new events.EventEmitter();
const em2 = new events.EventEmitter();

em.on('messageLogged',function(mssg){
  console.log(mssg); 
});

em2.on('messageLogged',function(mssg2){
  console.log(mssg2); 
});

module.exports = {em,em2};