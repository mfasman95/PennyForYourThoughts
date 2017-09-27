/* eslint-disable */
import { expect } from 'chai';

export default Object.freeze({
  paramExists: (param) => {
    return function(){
      expect(param).to.not.equal(undefined);
      expect(param).to.not.equal(null);
    }
  },
  validateString: (str) => {
    return function(){
      expect(str).to.be.a('string');
      expect(str.length).to.be.greaterThan(0);
    }
  },  
  validateInt: (num) => {
    return function(){
      expect(num).to.be.a('number');
      expect(num % 1).to.equal(0);
    }
  },
  validateFunction: (fn) => {
    return function(){
      expect(fn).to.be.a('function');
    }
  },
  objectNotEmpty: (obj) => {
    return function(){
      expect(obj).to.be.a('object');
      expect(Object.keys(obj).length).to.be.greaterThan(0);
    }
  },
  objectEmpty: (obj) => {
    return function(){
      expect(obj).to.be.a('object');
      expect(Object.keys(obj).length).to.equal(0);
    }
  },
  keyInObj: (obj, key) => {
    return function(){
      expect(obj).to.be.a('object');
      expect(Object.keys(obj).indexOf(key)).to.not.equal(-1);   
    }
  },
  keyNotInObj: (obj, key) => {
    return function(){
      expect(obj).to.be.a('object');
      expect(Object.keys(obj).indexOf(key)).to.equal(-1);   
    }
  },
});
