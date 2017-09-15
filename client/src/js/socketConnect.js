const io = require('socket.io-client');
const { logger } = require('./logging');

const handlers = {
  test: (res) => {
    console.log(res);
  }
}

module.exports = {
  init: (SERVER_URL) => {
    logger.log('log', `Connecting to ${SERVER_URL}...`);
    const socket = io(SERVER_URL);

    socket.on('connect', () => {
      logger.log('log', 'CONNECTED');
    });

    socket.on('ServerEmit', (res) => {
      if (!handlers[res.eventName]) {
        logger.log('warn', `Missing handler for ${res.eventName}`, res.data);
      }
      else {
        handlers[res.eventName](res.data);
        logger.log('SocketIn', `Received event ${res.eventName} from server...`, res.data);
      }
    });
  }
}
