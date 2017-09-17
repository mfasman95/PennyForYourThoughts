const { socketOut, error, log } = require('./logger');
const dcHandler = require('./../socketio/dc.handler.js');
const initHandler = require('./../socketio/init.handler.js');
const playerHandler = require('./../socketio/player.handler.js');

let io;

module.exports = {
  init: (_io) => { io = _io; },
  setEventHandlers: (socket) => {
    socket.on('disconnect', data => dcHandler(socket, data));
    socket.on('connection', data => initHandler(socket, data));
    socket.on('PlayerEvent', data => playerHandler(socket, data));
    log(`A socket connection has been established with socket ${socket.id}`);
  },
  emitter: (props) => {
    if (!props.socket) error('No socket provided in props for emitter function', props);
    if (!props.eventName) error('Missing event name in props for emitter function', props);
    props.socket.emit('ServerEmit', { eventName: props.eventName, data: props.data || 'No Data Provided' });
    socketOut(`Event ${props.eventName} sent to ${props.socket.id}`);
  },
  emitToAll: (props) => {
    if (!props.eventName) error('Missing event name in props for emitter function', props);
    io.sockets.emit('ServerEmit', { eventName: props.eventName, data: props.data || 'No Data Provided' });
    socketOut(`Event ${props.eventName} sent to ${props.room}`);
  },
  emitToRoom: (props) => {
    if (!props.room) error('No socket provided in props for emitter function', props);
    if (!props.eventName) error('Missing event name in props for emitter function', props);
    io.to(props.room).emit('ServerEmit', { eventName: props.eventName, data: props.data || 'No Data Provided' });
    socketOut(`Event ${props.eventName} sent to ${props.room}`);
  },
};
