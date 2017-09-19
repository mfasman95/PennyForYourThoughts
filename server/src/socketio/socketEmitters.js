const { socketOut } = require('./../utility/logger');
const { io } = require('./../server');

const emitter = (emitObj, socket) => {
  socket.emit('ServerEmit', emitObj);
  socketOut(`Event ${emitObj.eventName} sent to ${socket.id}`);
};
const emitToAll = (emitObj) => {
  io.sockets.emit('ServerEmit', emitObj);
  socketOut(`Event ${emitObj.eventName} sent to all sockets`);
};
const emitToRoom = (emitObj, room) => {
  io.to(room).emit('ServerEmit', emitObj);
  socketOut(`Event ${emitObj.eventName} sent to ${room}`);
};
const broadcastToRoom = (emitObj, room) => {
  io.to(room).broadcast('ServerEmit', emitObj);
  socketOut(`Event ${emitObj.eventName} sent to ${room}`);
};

// The base object sent via any emit
const makeEmitObj = eventName => data => Object.assign({}, { eventName, data: data || 'No Data Provided' });

exports.cEmit = eventName => data => socket => emitter(makeEmitObj(eventName, data), socket);
exports.cEmitToAll = eventName => data => emitToAll(makeEmitObj(eventName, data));
exports.cEmitToRoom = eventName => data => room => emitToRoom(makeEmitObj(eventName, data), room);
exports.cBroadcastToRoom = eventName => data => room => broadcastToRoom(makeEmitObj(eventName, data), room);

console.log('a');
console.log(module.exports);
