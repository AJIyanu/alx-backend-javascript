const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils.calculateNumber and return 10', ()=> {
    const Stub = sinon.stub().returns(10);
    const consoleStub = sinon.stub(console, 'log');
    const spy = sinon.spy(Utils, 'calculateNumber');
    Stub.callsFake(spy);

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(console.assert(consoleStub.calledWith('The total is: 10'))).to.be.true;

    spy.restore();
    Stub.restore();
    console.log.restore();
  });
});
