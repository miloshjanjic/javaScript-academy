const {em,em2} = require('./event1');

setTimeout(() => {
  em2.emit('messageLogged','Second Listener called !!!');
}, 2000);

setTimeout(() => {
  em.emit('messageLogged','Listener called !');
 }, 3000);
