const getPaymentTokenFromAPI = require('./test');
const assert = require('assert');

describe ('getPaymentTokenFromAPI', () => {
	it('it should return Successful response from the API', function(done) {
		getPaymentTokenFromAPI(true)
			.then((result) => {
			console.log(result, result.result);
			assert.equal(result.result, "Successful response from the API");
			done();
		});
		// done();
	});

});
