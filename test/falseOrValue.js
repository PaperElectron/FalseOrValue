/**
 * @file falseOrValue
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project falseOrValue
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var should = require('should');
var falseOrV = require('../');


describe('It should return false for all falsey values except 0 and -0', function(){

  it('Should return false for false', function(){
    falseOrV(false).should.be.false()
  })

  it('Should return false for \'false\'', function(){
    falseOrV('false').should.be.false()
  })

  it('Should return false for null', function(){
    falseOrV(null).should.be.false()
  })

  it('Should return false for undefined', function(){
    falseOrV().should.be.false()
  })

  it('Should return false for NaN', function(){
    falseOrV(NaN).should.be.false()
  })

  it('Should return false for "" ', function(){
    falseOrV("").should.be.false()
  })

  it('Should return false for \'\'', function(){
    falseOrV('').should.be.false()
  })

  it('Should return false for []', function(){
    falseOrV([]).should.be.false()
  })

  it('Should return false for {}', function(){
    falseOrV({}).should.be.false()
  })
});

describe('It should return the provided value', function() {

  it('Should return 0', function(){
    falseOrV(0).should.equal(0);
  })

  it('Should return -0', function(){
    falseOrV(-0).should.equal(-0);
  })

  it('Should return -1', function(){
    falseOrV(-1).should.equal(-1);
  })

  it('Should return true', function(){
    falseOrV(true).should.equal(true);
  })

  it('Should return numbers', function(){
    falseOrV(23).should.equal(23);
  })

  it('Should return a string', function(){
    falseOrV("hello world").should.equal("hello world");
  })

  it('Should return a filled array', function(){
    falseOrV([1,2,3]).should.have.length(3);
  })

  it('Should return an object', function(){
    falseOrV({a: 1}).a.should.equal(1);
  })

})