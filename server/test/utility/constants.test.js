/* eslint-disable */
import constants from './../../src/utility/constants';
import { expect } from 'chai';

import testingUtilities from './../testingUtilities';
const { paramExists, validateInt, validateString } = testingUtilities;

describe('Constants', function() {
  describe('# constants.roomCapacity', function() {
    it('Should exist', paramExists(constants.roomCapacity));
    it('Should be an integer', validateInt(constants.roomCapacity));
    it('Should be greater than 1', function() {
      expect(constants.roomCapacity).to.be.greaterThan(1);
    });
  });
  describe('# constants.rootStoreName', function() {
    it('Should exist', paramExists(constants.rootStoreName));
    it('Should be a string', validateString(constants.rootStoreName));
  });
  describe('# constants.DEFAULT_PORT', function() {
    it('Should exist', paramExists(constants.DEFAULT_PORT));
    it('Should be an integer', validateInt(constants.DEFAULT_PORT));
    it('Should be within the range of valid port numbers', function() {
      expect(constants.DEFAULT_PORT).to.not.be.lessThan(0);
      expect(constants.DEFAULT_PORT).to.be.lessThan(65535);
    });
  });
  describe('# constants.EMIT_NAME', function() {
    it('Should exist', paramExists(constants.EMIT_NAME));
    it('Should be a string', validateString(constants.EMIT_NAME));
  });
});
