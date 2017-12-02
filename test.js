const expect = require('chai').expect;
const functions = require('./functions');

describe('Testing: first steps', function () {

  describe('#functions.num()', function () {
    it('Should return a sum of a number added to itself', function (done) {

      expect(functions.sum(4)).to.equal(8);
      expect(functions.sum(6)).to.equal(12);

      done();
    });
  });

  describe('#functions.getCentury()', function () {

    it('Should take a year and return its century', function (done) {

      expect(functions.getCentury(1901)).to.equal(20);
      expect(functions.getCentury(99)).to.equal(1);

      done();
    });
  });

  describe('#functons.arrayToObject()', function () {

    it('Should take an array and return object with properties equals to each "odd" element of array,' +
        ' and value equals to each "even" element of array', function (done) {

      var array = ['K-PAX', '9.3/10', 'Knowing', '9.5/10', 'The Shawshank Redemption', '9.6/10'];

      expect(functions.arrayToObject(array)).to.deep.equal({
        'K-PAX': '9.3/10',
        'Knowing': '9.5/10',
        'The Shawshank Redemption': '9.6/10'
      });

      done();
    });
  });
});