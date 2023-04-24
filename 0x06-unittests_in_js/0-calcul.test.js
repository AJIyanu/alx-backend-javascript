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

console.log(calculateNumber);
assert.equal(calculateNumber(2, 5), 7);
