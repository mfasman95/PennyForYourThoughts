/* eslint-disable */
import { makeRoomStore, makeRoom } from './../../src/socketio/socketStorage';
import { roomCapacity } from './../../src/utility/constants';
import { expect } from 'chai';

import testingUtilities from './../testingUtilities';
const { validateString, validateFunction, objectNotEmpty, objectEmpty, keyInObj, keyNotInObj } = testingUtilities;

describe('Room', function(){
  describe('# Creating A Room', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);

    it('Should set room key to a string', validateString(room.key));
    it('Should set key properly', function(){ expect(room.key.length).to.equal(20) });
    it('Should set name properly', function(){ expect(room.name).to.equal(roomName) });
    it('Should set capacity properly', function(){ expect(room.capacity).to.equal(roomCapacity) });
    it('Should set occupants properly', function(){
      expect(room.occupants).to.be.a('object');
      expect(Object.keys(room.occupants).length).to.equal(0);
    });
    it('Should have addUser function', validateFunction(room.addUser));
    it('Should have removeUser function', validateFunction(room.removeUser));
  });
  describe('# Adding User To Room', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);
    const userSocket = {
      id: 'testId',
      inRoom: undefined,
    };
    room.addUser(userSocket);

    it('Should add user to occupants in room', objectNotEmpty(room.occupants));
    it('Should add user id as key to occupants', keyInObj(room.occupants, userSocket.id));
    it('Should set inRoom value of socket to room name', function(){ expect(userSocket.inRoom).to.equal(room.key) });
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

    it('Should remove user from room', objectEmpty(room.occupants));
    it('Should remove user id as key from room', keyNotInObj(room.occupants, userSocket.id));
    it('Should remove inRoom value of socket', function(){ expect(userSocket.inRoom).to.equal(undefined) });
  });
});

describe('User Store', function(){
  describe('# Creating A Store', function(){
    const storeName = 'testStore';  
    const store = makeRoomStore(storeName);

    it('Should set store key to a string', validateString(store.key));
    it('Should set key properly', function(){ expect(store.key.length).to.equal(20) });
    it('Should set name properly', function(){ expect(store.name).to.equal(storeName) });
    it('Should set rooms properly', function(){
      expect(store.rooms).to.be.a('object');
      expect(Object.keys(store.rooms).length).to.equal(0);
    });
    it('Should have addRoom function', validateFunction(store.addRoom));
    it('Should have removeRoom function', validateFunction(store.removeRoom));
  });
  describe('# Adding Room To User Store', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);
    
    const storeName = 'testStore';  
    const store = makeRoomStore(storeName);
    
    store.addRoom(room);

    it('Should add room to rooms in store', objectNotEmpty(store.rooms));
    it('Should add room key as key to store', keyInObj(store.rooms, room.key));
  });
  describe('# Removing Room From User Store', function(){
    const roomName = 'testRoom';
    const room = makeRoom(roomName);

    const storeName = 'testStore';  
    const store = makeRoomStore(storeName);
    
    store.addRoom(room);
    store.removeRoom(room);

    it('Should remove user from room', objectEmpty(store.rooms));
    it('Should remove user id as key from room', keyNotInObj(store.rooms, room.key));
  });
});
