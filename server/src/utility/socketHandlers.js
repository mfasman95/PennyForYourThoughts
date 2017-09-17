const { log } = require('./logger');
const dcHandler = require('./../socketio/dc.handler.js');
const initHandler = require('./../socketio/init.handler.js');
const playerHandler = require('./../socketio/player.handler.js');

module.exports = {
  setEventHandlers: (socket) => {
    socket.on('disconnect', data => dcHandler(socket, data));
    socket.on('connection', data => initHandler(socket, data));
    socket.on('PlayerEvent', data => playerHandler(socket, data));
    log(`Socket handlers set for socket ${socket.id}`);
  },
};
