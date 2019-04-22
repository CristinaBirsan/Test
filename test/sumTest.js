var assert = require('chai').assert;

var sum = require('../sum');

describe('Sum', function(){
    it("should return 6",function(){
        var result = sum([1,2,3,4]);
        assert.equal(result,6);
    });
});