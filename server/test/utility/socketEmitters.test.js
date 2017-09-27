/* eslint-disable */
import emitters from './../../src/socketio/socketEmitters';
const { cEmit, cEmitToAll, cEmitToRoom, cBroadcastToRoom } = emitters;
import { expect } from 'chai';

import testingUtilities from './../testingUtilities';
const { validateFunction } = testingUtilities;

describe('SocketEmitters', function(){
  describe('# socketEmitters.cEmit', function(){
    const secondOrderValid = cEmit('test');
    const secondOrderInvalid = cEmit(1);
    const thirdOrderValid = cEmit('test')({data: 'test'});
    const thirdOrderInvalid = cEmit('test')(1);
    it('Should be a function', validateFunction(cEmit));
    it('Should not return function with invalid param - first order', function (){
      expect(secondOrderInvalid).to.not.be.a('function');
    })
    it('Should return function with valad param - first order', validateFunction(secondOrderValid));
    it('Should not return function with invalid param - second order', function (){
      expect(thirdOrderInvalid).to.not.be.a('function');
    })
    it('Should return function with valad param - second order', validateFunction(thirdOrderValid));
  });
  describe('# socketEmitters.cEmitToAll', function(){
    it('Should be a function', validateFunction(cEmitToAll));
    it('Should return a function', validateFunction(cEmitToAll('test')));
  });
  describe('# socketEmitters.cEmitToRoom', function(){
    it('Should be a function', validateFunction(cEmitToRoom));
    it('Should return a function', validateFunction(cEmitToRoom('test')));
  });
  describe('# socketEmitters.cBroadcastToRoom', function(){
    it('Should be a function', validateFunction(cBroadcastToRoom));
    it('Should return a function', validateFunction(cBroadcastToRoom('test')));
  });
});
