/* eslint-disable */
const { expect } = require('chai');
const emitters = require('./../../src/socketio/socketEmitters');

describe('SocketEmitters', function(){
  describe('# socketEmitters.cEmit', function(){
    it('should be a function', function(){
      console.log(emitters.cEmit);
      expect(emitters.cEmit).to.be.a('function');
    });
  });
  describe('# socketEmitters.cEmitToAll', function(){
  });
  describe('# socketEmitters.cEmitToRoom', function(){
  });
  describe('# socketEmitters.cBroadcastToRoom', function(){
  });
});
