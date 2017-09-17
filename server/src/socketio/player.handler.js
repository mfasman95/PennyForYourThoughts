const { rooms } = require('./init.handler');
const { emitter } = require('./../utility/socketHandlers');
const pf = require('./../utility/playerFunctions');
const { roomCapacity } = require('./../utility/constants');
const { makeRoomKey } = require('./../utility/misc');

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

    emitter({ socket, eventName: 'madeRoom' });

    // Join the created room
    pf.joinRoom(socket, data.roomKey);
  },
  joinRoom: (_socket, _data) => { pf.joinRoom(_socket, _data.roomKey); },
  leaveRoom: (_socket, _data) => { pf.leaveRoom(_socket, _data.roomKey); },
  test: (_socket, _data) => { _socket.emit('ServerEmit', { _data }); },
};

module.exports = (socket, data) => handlers[data.eventName](socket, data.data);
