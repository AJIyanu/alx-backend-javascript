const assert = require('assert');

const calcuateNumber = require('./0-calcul');

describe ('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () =>  {
    const a = 4.9;
    const b = 8.3;
    const result = 12;

    const calculate = calcuateNumber(a, b);

    assert.strictEqual(calculate, result);
  }
  );
});
