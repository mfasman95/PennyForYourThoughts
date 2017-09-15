const { users } = require('./init.handler');

module.exports = { disconnectHandler: socket => delete users[socket.id] };
