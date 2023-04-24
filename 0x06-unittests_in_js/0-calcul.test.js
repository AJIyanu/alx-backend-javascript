const assert = require('assert');

const calculateNumber = require('./0-calcul');

// describe ('calculateNumber', () => {
//   it('should return the sum of two rounded numbers', () =>  {
//     const a = 4.9;
//     const b = 8.3;
//     const result = 13;

//     const calculate = calculateNumber(a, b);

//     assert.strictEqual(calculate, result);
//   }
//   );
// });

describe('calculateNumber', () => {
    it('it round the first argument', () => {
      assert.equal(calculateNumber(1.0, 0), 1);
      assert.equal(calculateNumber(1.3, 0), 1);
      assert.equal(calculateNumber(1.7, 0), 2);
    });

    it('it round the second argument', () => {
      assert.equal(calculateNumber(0, 1.0), 1);
      assert.equal(calculateNumber(0, 1.3), 1);
      assert.equal(calculateNumber(0, 1.7), 2);
    });

    it('it should return the right number', () => {
      assert.equal(calculateNumber(1.3, 0), 1);
      assert.equal(calculateNumber(0, 1.2), 1);
      assert.equal(calculateNumber(1.3, 1.3), 2);
      assert.equal(calculateNumber(1.7, 1.2), 3);
      assert.equal(calculateNumber(1.3, 1.8), 3);
      assert.equal(calculateNumber(1.6, 1.8), 4);
    });
  });
