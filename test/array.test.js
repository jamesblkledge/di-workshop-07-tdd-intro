var chai = require('chai');
var expect = chai.expect;

describe('Array', function() {
  //PUSH
  describe('#push()', function() {
    it('should add an item to the array', function() {
      var array = [1, 2, 3, 4];
      array.push(5);

      expect(array).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should alter the length property', function() {
      var array = [1, 1, 1, 1];
      array.push(1);

      expect(array.length).to.equal(5);
    });
  });


  //POP
  describe('#pop()', function() {
    it('should remove the last item from the array', function() {
      var array = [1, 2, 3, 4, 5];
      array.pop();

      expect(array).to.deep.equal([1, 2, 3, 4]);
    })

    it('should alter the length property', function() {
      var array = [1, 1, 1, 1, 1];
      array.pop();

      expect(array.length).to.equal(4);
    });
  });


  //INDEXOF
  describe('#indexOf()', function() {
    it('should return the index of 3', function() {
      var array = [1, 2, 3, 4, 5];

      expect(array.indexOf(3)).to.equal(2);
    });

    it('should return -1', function() {
      var array = [1, 2, 3, 4, 5];

      expect(array.indexOf(6)).to.equal(-1);
    });
  });


  //JOIN
  describe('#join()', function() {
    it('should join the array on ,', function() {
      var array = [1, 2, 3, 4, 5];

      expect(array.join(", ")).to.equal("1, 2, 3, 4, 5");
    });

    it('should join the array on -', function() {
      var array = [1, 2, 3, 4, 5];

      expect(array.join("-")).to.equal("1-2-3-4-5");
    });
  });


  //SHIFT
  describe('#shift()', function() {
    it('should remove the first element', function() {
      var array = [1, 2, 3, 4, 5];
      array.shift();

      expect(array).to.deep.equal([2, 3, 4, 5]);
    });

    it('should return the first element', function() {
      var array = [1, 2, 3, 4, 5];
      var firstElement = array.shift();

      expect(firstElement).to.equal(1);
    });
  });


  //UNSHIFT
  describe('#unshift()', function() {
    it('should change the length of the array', function() {
      var array = [1, 2, 3, 4, 5];

      expect(array.unshift(6, 7)).to.equal(7);
    })

    it('should add to the start of the array', function() {
      var array = [1, 2, 3, 4, 5];
      array.unshift(6, 7);

      expect(array).to.deep.equal([6, 7, 1, 2, 3, 4, 5]);
    });
  });
});