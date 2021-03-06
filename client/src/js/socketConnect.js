const io = require('socket.io-client');

const { logger } = require('./logging');
const { store } = require('./../redux/combineReducers');

const handlers = {
};

let socket;

module.exports = {
  init: (SERVER_URL) => {
    logger.log('log', `Connecting to ${SERVER_URL}...`);
    socket = io(SERVER_URL);

    socket.on('connect', () => store.dispatch({ type: 'CONNECT' }));

    socket.on('ServerEmit', (res) => {
      if (!handlers[res.eventName]) logger.log('warn', `Missing handler for ${res.eventName}`, res.data);
      else {
        logger.log('SocketIn', `Received event ${res.eventName} from server...`, res.data);
        handlers[res.eventName](res.data);
      }
    });
    socket.emit('test', 'test message');
    socket.on('test', data => logger.log('SocketIn', data));
  },
  emitter: (props) => {
    if (!props.eventName) logger.log('error', 'Missing event name in props for emitter function', props);
    socket.emit('PlayerEvent', { eventName: props.eventName, data: props.data || 'No Data   Provided' });
    logger.log('SocketOut', `Event ${props.eventName} sent to ${props.socket.name}`);
  },
};
