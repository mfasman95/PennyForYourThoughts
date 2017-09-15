const { users, rooms } = require('./init.handler');

const handlers = {

};

module.exports = (socket, data) => handlers[data.eventName](socket, data.data);
