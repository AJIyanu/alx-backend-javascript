const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { beforeEach, afterEach, it } = require('mocha');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    spy.restore();
    console.log.restore();
  });

  it('verify that sendrequestoapi returns 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleStub.calledWith('The total is: 120')).to.be.true;
    expect(consoleStub.calledOnce).to.be.true;
  });

  it('verify that sendrequestoapi returns 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleStub.calledWith('The total is: 20')).to.be.true;
    expect(consoleStub.calledOnce).to.be.true;
  });
});
