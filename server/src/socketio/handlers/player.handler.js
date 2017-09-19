const { rooms } = require('./init.handler');
const playerEmitters = require('./../emitters/player.emitters');
const pf = require('./../../utility/playerFunctions');
const { roomCapacity } = require('./../../utility/constants');
const { makeRoomKey } = require('./../../utility/misc');

const handlers = {
  makeRoom: (_socket, _data) => {
    const socket = _socket;
    const data = _data;

    const roomKey = makeRoomKey();
    rooms[roomKey] = {
      key: roomKey,
      name: data.roomName,
      occupancy: 1,
      capacity: roomCapacity,
      occupants: [data.name],
    };

    playerEmitters.eMadeRoom({})(socket);

    const roomData = Object.freeze({
      roomKey: data.roomKey,
      roomName: data.roomName,
    });
    const userData = { id: socket.id };
    playerEmitters.bcJoinRoom(Object.assign({}, roomData, userData))(data.roomName);
    playerEmitters.eJoinedRoom(roomData)(socket);
  },
  joinRoom: (_socket, _data) => { pf.joinRoom(_socket, _data.roomKey); },
  leaveRoom: (_socket, _data) => { pf.leaveRoom(_socket, _data.roomKey); },
  test: (_socket, _data) => { _socket.emit('ServerEmit', { _data }); },
};

module.exports = (socket, data) => handlers[data.eventName](socket, data.data);
