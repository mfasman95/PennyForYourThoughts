/* eslint-disable */
const chalk = require('chalk');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const logLoop = (chalkType, arr) => {
  if (NODE_ENV === 'dev') {
    for (let i = 0; i < arr.length; i++) {
      const data = arr[i];
      switch (typeof data) {
        case 'object': {
          if (data instanceof Array) {
            for (let i = 0; i < data.length; i++) console.log(chalkType(data[i]));
          }
          else {
            const keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) console.log(chalkType(data[keys[i]]));
          }
          break;
        }
        default: { console.log(chalkType(data)); break; }
      }
    }
  }
};

const chalkError = (...data) => logLoop(chalk.bold.red, data);
const chalkWarn = (...data) => logLoop(chalk.bold.yellow, data);
const chalkLog = (...data) => logLoop(chalk.bold.white, data);
const chalkSocketIn = (...data) => logLoop(chalk.bgWhite.blue, data);
const chalkSocketOut = (...data) => logLoop(chalk.bgWhite.red, data);

module.exports = {
  error: chalkError,
  warn: chalkWarn,
  log: chalkLog,
  socketIn: chalkSocketIn,
  socketOut: chalkSocketOut,
};
