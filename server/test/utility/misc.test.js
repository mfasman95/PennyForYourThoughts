/* eslint-disable */
const { makeKey } = require('./../../src/utility/misc');
const { expect } = require('chai');

describe('Misc Function Testing', function(){
  describe('# makeKey()', function(){
    const keyLength = 5;
    const key = makeKey(keyLength);
    it('Should be a string', function(){
      expect(key).to.be.a('string');
    });
    it('Should be 20 characters long', function(){
      expect(key.length).to.equal(keyLength);
    });
  });
});
