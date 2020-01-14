var chai = require('chai');
var expect = chai.expect;

var Coolculator = require('../lib/coolculator');

describe('Coolculator', function() {
  mm = new Coolculator();

  it('should add', function() {
    result = mm.add(2, 3);
    expect(result).to.equal(5);
  });

  it('should multiply', function() {
    result = mm.multiply(2, 3);
    expect(result).to.equal(6);
  });

  it('should subtract', function() {
    result = mm.subtract(3, 2);
    expect(result).to.equal(1);
  });

  it('should divide', function() {
    result = mm.divide(4, 2);
    expect(result).to.equal(2);
  });

  it('should return the highest', function() {
    result = mm.highest(4, 8);
    expect(result).to.equal(8);
  });

  it('should return the lowest', function() {
    result = mm.lowest(4, 8);
    expect(result).to.equal(4);
  });

  it('should double', function() {
    result = mm.double(4);
    expect(result).to.equal(8);
  });

  it('should square', function() {
    result = mm.square(4);
    expect(result).to.equal(16);
  });

  it('should raise', function() {
    result = mm.raise(4, 3);
    expect(result).to.equal(64);
  });

  it('is negative', function() {
    result = mm.isNegative(-16);
    expect(result).to.equal(true);
  });

  it('is not negative', function() {
    result = mm.isNegative(16);
    expect(result).to.equal(false);
  });

  it('is positive', function() {
    result = mm.isPositive(24);
    expect(result).to.equal(true);
  });

  it('is not positive', function() {
    result = mm.isPositive(-24);
    expect(result).to.equal(false);
  });

  it('is cool', function() {
    result = mm.isCool(548695);
    expect(result).to.equal(true);
  });

  it('is not cool', function() {
    result = mm.isCool(548696);
    expect(result).to.equal(false);
  });

  it('should sum all numbers together', function() {
    result = mm.sum([1, 2, 3, 4]);
    expect(result).to.equal(10);
  });

  it('should multiply all numbers together', function() {
    result = mm.multiplyArray([1, 2, 3, 4]);
    expect(result).to.equal(24);
  });

  it('should average', function() {
    result = mm.mean([1, 2, 3, 4]);
    expect(result).to.equal(2.5);
  });

  it('should factorial', function() {
    result = mm.factorial(5);
    expect(result).to.equal(120);
  });

  it('should random', function() {
    result = mm.random(5);
    expect(result).to.below(5);
  });
});