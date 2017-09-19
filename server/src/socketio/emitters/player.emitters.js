const emitters = require('./../socketEmitters');

console.log('Hello World');
console.log(emitters);

module.exports = Object.freeze({
  bcJoinRoom: emitters.cBroadcastToRoom('userJoinedRoom'),
  bcLeaveRoom: emitters.cBroadcastToRoom('userLeftRoom'),
  eMadeRoom: emitters.cEmit('madeRoom'),
  eJoinedRoom: emitters.cEmit('joinedRoom'),
  eLeftRoom: emitters.cEmit('leftRoom'),
});
