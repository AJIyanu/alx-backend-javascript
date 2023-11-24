const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe ('getPaymentTokenFromAPI', () => {
	it('it should return Successful response from the API', function(done) {
		getPaymentTokenFromAPI(true)
			.then((result) => {
			assert.equal(result.data, "Successful response from the API");
		});
		done();
	});

	xit('should do nothing when input is false', (done) => {
		assert.equal(getPaymentTokenFromAPI(false), undefined);
		done();
	});
});
