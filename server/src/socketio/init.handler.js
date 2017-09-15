module.exports = {
  users: {

  },
  rooms: {

  },
  initHandler: (socket) => {
    module.users[socket.id] = socket;
  },
};
