const { users } = require('./init.handler');
const pf = require('./../utility/playerFunctions');

module.exports = (socket) => {
  if (socket.inRoom) pf.leaveRoom(socket, socket.inRoom);
  delete users[socket.id];
};
