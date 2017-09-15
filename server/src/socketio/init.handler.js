module.exports = {
  users: {
  },
  rooms: {
  },
  initHandler: (socket) => {
    socket.join('entryRoom');
  },
};
