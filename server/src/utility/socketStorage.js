const { roomCapacity } = require('./constants');
const { makeKey } = require('./misc');

module.exports = {
  makeRoom: (name) => {
    const room = {
      key: makeKey(20),
      name,
      capacity: roomCapacity,
      occupants: {},
      addUser: (_socket) => {
        const socket = _socket;

        socket.inRoom = room.key;
        room.occupants[socket.id] = socket;
      },
      removeUser: (_socket) => {
        const socket = _socket;

        delete socket.inRoom;
        delete room.occupants[socket.id];
      },
    };
    return room;
  },
  makeRoomStore: (name) => {
    const store = {
      key: makeKey(20),
      name,
      rooms: {},
      addRoom: (room) => {
        store.rooms[room.key] = room;
      },
      removeRoom: (room) => {
        delete store.rooms[room.key];
      },
    };
    return store;
  },
};
