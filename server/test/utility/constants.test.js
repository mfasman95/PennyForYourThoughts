/* eslint-disable */
const constants = require('./../../src/utility/constants');
const { expect } = require('chai');

describe('Constants', function() {
  describe('constants.roomCapacity', function() {
    it('should be match required constraints', function() {
      expect(constants.roomCapacity).to.be.a('number');
      expect(constants.roomCapacity % 1).to.equal(0);
      expect(constants.roomCapacity).to.be.greaterThan(1);
      expect(constants.roomCapacity).to.not.equal(undefined);
      expect(constants.roomCapacity).to.not.equal(null);
    });
  });
});