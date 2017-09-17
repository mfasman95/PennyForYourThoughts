/* eslint-disable */
const { users } = require('./../../src/utility/socketHandlers');
const { DEFAULT_PORT } = require('./../../src/utility/constants');
const { expect } = require('chai');
const io = require('socket.io-client');

const SOCKET_URL = `127.0.0.1:${DEFAULT_PORT}`;

describe('Socket Handlers', function(){
  describe('# Init', function(){
    const client = io.connect(SOCKET_URL);
  });
});
