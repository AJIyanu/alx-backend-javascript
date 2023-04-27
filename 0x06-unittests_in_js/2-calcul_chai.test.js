const calculateNumber = require('./2-calcul_chai');

expect(calculateNumber('SUM', 1.2, 3.5)).to.equal(5);
expect(calculateNumber('SUM', 1.2, 3.5)).to.equal(5);
expect(calculateNumber('SUM', 1.2, 3.5)).to.equal(5);

expect(calculateNumber('SUBTRACT', 8.4, 3.4)).to.equal(5);
expect(calculateNumber('SUBTRACT', 8.4, 2)).to.equal(6);
expect(calculateNumber('SUBTRACT', 7.8, 0)).to.equal(8);

expect(calculateNumber('DIVIDE', 8.4, 2)).to.equal(4);
expect(calculateNumber('DIVIDE', 2.0, 2.4)).to.equal(1);
expect(calculateNumber('DIVIDE', 7.9, 1.2)).to.equal(8);

expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
