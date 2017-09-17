/* eslint-disable */
const { DEFAULT_PORT } = require('./../../src/utility/constants');
const { expect } = require('chai');
const io = require('socket.io-client');
const server = require('./utils/server');

const SOCKET_URL = `localhost:${DEFAULT_PORT}`;
const OPTIONS = {
  forceNew: true,
  transports: ['websocket'],
  reconnection: false,
};
const testMsg = 'HelloWorld';
let sender, receiver;

describe('Chat Events', function(){
  beforeEach(function(done){
    server.start();
    // connect two io clients
    sender = io(SOCKET_URL, OPTIONS);
    receiver = io(SOCKET_URL, OPTIONS);
    // finish beforeEach setup
    done();
  });
  afterEach(function(done){
    // disconnect io clients after each test
    sender.disconnect();
    receiver.disconnect();
    done();
  });

  describe('test Events', function(){
    it('Clients should receive a message when the `test` event is emited.', function (done){
      sender.emit('test', testMsg);
      receiver.on('test', function(msg){
        expect(msg).to.equal(testMsg);
        done()
      });
    });
  });
});
