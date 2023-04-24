const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe ('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () =>  {
    const a = 4.9;
    const b = 8.3;
    const result = 12;

    const calculate = calculateNumber(a, b);
    console.log(calculate);
    console.log(calculateNumber(5.6, 8.5));

    assert.strictEqual(calculate, result);
  }
  );
});
