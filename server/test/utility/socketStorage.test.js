/* eslint-disable */
const { makeRoomStore, makeRoom } = require('./../../src/socketio/socketStorage');
const { roomCapacity } = require('./../../src/utility/constants');
const { expect } = require('chai');

describe('Room', function(){
  describe('# Creating A Room', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);

    it('Should set key properly', function(){
      expect(room.key.length).to.equal(20);
      expect(room.key).to.be.a('string');
    });
    it('Should set name properly', function(){
      expect(room.name).to.equal(roomName);
    });
    it('Should set capacity properly', function(){
      expect(room.capacity).to.equal(roomCapacity);
    });
    it('Should set occupants properly', function(){
      expect(room.occupants).to.be.a('object');
      expect(Object.keys(room.occupants).length).to.equal(0);
    });
    it('Should have addUser function', function(){
      expect(room.addUser).to.be.a('function');
    });
    it('Should have removeUser function', function(){
      expect(room.removeUser).to.be.a('function');
    });
  });
  describe('# Adding User To Room', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);
    const userSocket = {
      id: 'testId',
      inRoom: undefined,
    };
    room.addUser(userSocket);

    it('Should add user to occupants in room', function(){
      expect(Object.keys(room.occupants).length).to.equal(1);
    });
    it('Should add user id as key to occupants', function(){
      expect(Object.keys(room.occupants).indexOf(userSocket.id)).to.not.equal(-1);
    });
    it('Should set inRoom value of socket to room name', function(){
      expect(userSocket.inRoom).to.equal(room.key);
    });
  });
  describe('# Removing User From Room', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);
    const userSocket = {
      id: 'testId',
      inRoom: undefined,
    };
    room.addUser(userSocket);
    room.removeUser(userSocket);

    it('Should remove user from room', function(){
      expect(Object.keys(room.occupants).length).to.equal(0);
    });
    it('Should remove user id as key from room', function(){
      expect(Object.keys(room.occupants).indexOf(userSocket.id)).to.equal(-1);      
    });
    it('Should remove inRoom value of socket', function(){
      expect(userSocket.inRoom).to.equal(undefined);
    });
  });
});

describe('User Store', function(){
  describe('# Creating A Store', function(){
    const storeName = 'testStore';  
    const store = makeRoomStore(storeName);

    it('Should set key properly', function(){
      expect(store.key.length).to.equal(20);
      expect(store.key).to.be.a('string');
    });
    it('Should set name properly', function(){
      expect(store.name).to.equal(storeName);
    });
    it('Should set rooms properly', function(){
      expect(store.rooms).to.be.a('object');
      expect(Object.keys(store.rooms).length).to.equal(0);
    });
    it('Should have addRoom function', function(){
      expect(store.addRoom).to.be.a('function');
    });
    it('Should have removeRoom function', function(){
      expect(store.removeRoom).to.be.a('function');
    });
  });
  describe('# Adding Room To User Store', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);
    
    const storeName = 'testStore';  
    const store = makeRoomStore(storeName);
    
    store.addRoom(room);

    it('Should add room to rooms in store', function(){
      expect(Object.keys(store.rooms).length).to.equal(1);
    });
    it('Should add room key as key to store', function(){
      expect(Object.keys(store.rooms).indexOf(room.key)).to.not.equal(-1);
    });
  });
  describe('# Removing Room From User Store', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);

    const storeName = 'testStore';  
    const store = makeRoomStore(storeName);
    
    store.addRoom(room);
    store.removeRoom(room);

    it('Should remove user from room', function(){
      expect(Object.keys(store.rooms).length).to.equal(0);
    });
    it('Should remove user id as key from room', function(){
      expect(Object.keys(store.rooms).indexOf(room.key)).to.equal(-1);      
    });
  });
});
