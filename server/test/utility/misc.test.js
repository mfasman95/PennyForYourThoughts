/* eslint-disable */
import { makeKey } from './../../src/utility/misc';
import { expect } from 'chai';

import testingUtilities from './../testingUtilities';
const { validateString } = testingUtilities;

describe('Misc Function Testing', function(){
  describe('# makeKey()', function(){
    const keyLength = 5;
    const key = makeKey(keyLength);
    it('Should be a string', validateString(key));
    it('Should be the specified length', function(){ expect(key.length).to.equal(keyLength) });
  });
});
