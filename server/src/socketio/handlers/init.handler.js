const { makeRoomStore } = require('./../socketStorage');
const { rootStoreName } = require('./../../utility/constants');
const { socketIn } = require('./../../utility/logger');

const store = makeRoomStore(rootStoreName);

module.exports = {
  store,
  initHandler: socket => socketIn(`A socket with id ${socket.id} has connected to the server`),
};
