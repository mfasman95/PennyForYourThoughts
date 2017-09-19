const pf = require('./../../utility/playerFunctions');

module.exports = (socket) => {
  if (socket.inRoom) pf.leaveRoom(socket, socket.inRoom);
};
