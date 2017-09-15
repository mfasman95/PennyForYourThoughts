const { rooms } = require('./../socketio/init.handler');
const { emitter } = require('./socketHandlers');
const { roomCapacity } = require('./constants');

module.exports = {
  leaveRoom: (_socket, _roomKey) => {
    const socket = _socket;
    const roomKey = _roomKey;

    const room = rooms[roomKey];
    const index = room.occupants.indexOf(socket.name);
    if (index > -1) {
      room.occupants.splice(index, 1);
      room.occupancy--;
      socket.join('entryRoom');
      emitter({ socket, eventName: 'leftRoom' });
      if (room.occupancy === 0) delete rooms[roomKey];
    }
  },
  joinRoom: (_socket, _roomKey) => {
    const socket = _socket;
    const roomKey = _roomKey;
    const room = rooms[_roomKey];

    if (!room.occupancy >= roomCapacity) {
      room.occupancy++;
      socket.inRoom = roomKey;
      socket.join(roomKey);
      emitter({
        socket,
        eventName: 'joinedRoom',
        data: { room },
      });
    }
  },
};
