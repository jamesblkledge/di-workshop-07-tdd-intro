var chai = require('chai');
var expect = chai.expect;

var Coolculator = require('../lib/coolculator');

describe('Coolculator', function() {
  mm = new Coolculator();

  //ADD
  describe('#add()', function() {
    it('should add', function() {
      result = mm.add(2, 3);
      expect(result).to.equal(5);
    });

    it('should add variable', function() {
      result = mm.add(2, 3, 4, 5, 6);
      expect(result).to.equal(20);
    });
  });


  //MULTIPLY
  describe('#multiply()', function() {
    it('should multiply', function() {
      result = mm.multiply(2, 3);
      expect(result).to.equal(6);
    });
  });


  //SUBTRACT
  describe('#subtract()', function() {
    it('should subtract', function() {
      result = mm.subtract(3, 2);
      expect(result).to.equal(1);
    });
  });


  //DIVIDE
  describe('#divide()', function() {
    it('should divide', function() {
      result = mm.divide(4, 2);
      expect(result).to.equal(2);
    });
  });


  //HIGHEST
  describe('#highest()', function() {
    it('should return the highest', function() {
      result = mm.highest(4, 8);
      expect(result).to.equal(8);
    });
  });


  //LOWEST
  describe('#lowest()', function() {
    it('should return the lowest', function() {
      result = mm.lowest(4, 8);
      expect(result).to.equal(4);
    });
  });


  //DOUBLE
  describe('#double()', function() {
    it('should double', function() {
      result = mm.double(4);
      expect(result).to.equal(8);
    });
  });


  //SQUARE
  describe('#square()', function() {
    it('should square', function() {
      result = mm.square(4);
      expect(result).to.equal(16);
    });
  });


  //RAISE
  describe('#raise()', function() {
    it('should raise', function() {
      result = mm.raise(4, 3);
      expect(result).to.equal(64);
    });
  }); 


  //ISNEGATIVE
  describe('#isNegative()', function() {
    it('is negative', function() {
      result = mm.isNegative(-16);
      expect(result).to.equal(true);
    });

    it('is not negative', function() {
      result = mm.isNegative(16);
      expect(result).to.equal(false);
    });
  });


  //ISPOSITIVE
  describe('#isPositive()', function() {
    it('is positive', function() {
      result = mm.isPositive(24);
      expect(result).to.equal(true);
    });

    it('is not positive', function() {
      result = mm.isPositive(-24);
      expect(result).to.equal(false);
    });
  });


  //ISCOOL
  describe('#isCool()', function() {
    it('is cool', function() {
      result = mm.isCool(548695);
      expect(result).to.equal(true);
    });

    it('is not cool', function() {
      result = mm.isCool(548696);
      expect(result).to.equal(false);
    });
  });


  //SUM
  describe('#sum()', function() {
    it('should sum all numbers together', function() {
      result = mm.sum([1, 2, 3, 4]);
      expect(result).to.equal(10);
    });
  });


  //MULTIPLYARRAY
  describe('#multiplyArray()', function() {
    it('should multiply all numbers together', function() {
      result = mm.multiplyArray([1, 2, 3, 4]);
      expect(result).to.equal(24);
    });
  });


  //MEAN
  describe('#mean()', function() {
    it('should average', function() {
      result = mm.mean([1, 2, 3, 4]);
      expect(result).to.equal(2.5);
    });
  });


  //FACTORIAL
  describe('#factorial()', function() {
    it('should factorial', function() {
      result = mm.factorial(5);
      expect(result).to.equal(120);
    });
  });


  //RANDOM
  describe('#random()', function() {
    it('should random', function() {
      result = mm.random(5);
      expect(result).to.below(5);
    });
  });
});