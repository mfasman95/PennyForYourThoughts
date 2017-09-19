const { log } = require('./../utility/logger');
const dcHandler = require('./handlers/dc.handler.js');
const initHandler = require('./handlers/init.handler.js');
const playerHandler = require('./handlers/player.handler.js');

module.exports = {
  setEventHandlers: (socket) => {
    socket.on('disconnect', data => dcHandler(socket, data));
    socket.on('connection', data => initHandler(socket, data));
    socket.on('PlayerEvent', data => playerHandler(socket, data));
    log(`Socket handlers set for socket ${socket.id}`);
  },
};
