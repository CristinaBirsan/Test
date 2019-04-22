var assert= require('chai').assert;

var duplicate = require('../duplicate');

describe('Duplicate', function(){
    it("should return True(Duplicate)", function(){
        var result = duplicate([1,2,3,2,4]);
        assert.equal(result,true);
    });
});