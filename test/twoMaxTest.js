var assert= require('chai').assert;

var towMax = require('../twoMax');

describe('1 & 2 Max Element', function(){
    it("should return 200 and 80", function(){
        var result = towMax([10,200,80,15]);
        var testResult= '200,80';
        assert.equal(result,testResult);
    });
});