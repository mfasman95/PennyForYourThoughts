const { logType, makeLogger } = require('debugger_js');

const SocketIn = logType({
  logStyle: 'Socket In',
  textColor: '#0000FF'
});
const SocketOut = logType({
  logStyle: 'Socket Out',
  textColor: '#00FF00'
});

module.exports = {
  logger: makeLogger({
    name: 'AppLogger',
    logging: 'logAll',
    debugModes: {
      log: true,
      info: true,
      warn: true,
      error: true,
      SocketIn: true,
      SocketOut: true,
    },
    logTypes: {
      SocketIn,
      SocketOut,
    },
  }) 
}
