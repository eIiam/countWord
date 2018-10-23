var assert = require('assert');

const wordCount = require("../index");

describe('wordCount', function() {
  it('should throw a error', function() {
    assert.throws(function() { wordCount({}); }, TypeError);
  });
  it('should match occurence', function() {
    assert.deepEqual(
      wordCount('La différence entre toi et moi, c’est que moi j’ai la classe.'), 
      { 
        la: 2,
        'différence': 1,
        entre: 1,
        toi: 1,
        et: 1,
        moi: 2,
        est: 1,
        que: 1,
        ai: 1,
        classe: 1 
      }
    );
  });
});