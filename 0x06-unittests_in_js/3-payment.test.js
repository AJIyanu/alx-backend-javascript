const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils.calculateNumber function once', ()=> {
    const spy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);

    expect(sinon.assert.calledWith(spy, 'SUM', 100, 200)).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    spy.restore();
  });
});
