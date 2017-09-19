/* eslint-disable */
const constants = require('./../../src/utility/constants');
const { expect } = require('chai');

describe('Constants', function() {
  describe('# constants.roomCapacity', function() {
    it('Should match required constraints', function() {
      expect(constants.roomCapacity).to.be.a('number');
      expect(constants.roomCapacity % 1).to.equal(0);
      expect(constants.roomCapacity).to.be.greaterThan(1);
      expect(constants.roomCapacity).to.not.equal(undefined);
      expect(constants.roomCapacity).to.not.equal(null);
    });
  });
  describe('# constants.rootStoreName', function() {
    it('Should match required constraints', function() {
      expect(constants.rootStoreName).to.be.a('string');
      expect(constants.rootStoreName.length).to.be.greaterThan(0);
      expect(constants.rootStoreName).to.not.equal(undefined);
      expect(constants.rootStoreName).to.not.equal(null);
    });
  });
  describe('# constants.DEFAULT_PORT', function() {
    it('Should match required constraints', function() {
      expect(constants.DEFAULT_PORT).to.be.a('number');
      expect(constants.DEFAULT_PORT % 1).to.equal(0);
      expect(constants.DEFAULT_PORT).to.not.be.lessThan(0);
      expect(constants.DEFAULT_PORT).to.be.lessThan(65535);
      expect(constants.DEFAULT_PORT).to.not.equal(undefined);
      expect(constants.DEFAULT_PORT).to.not.equal(null);
    });
  });
});
