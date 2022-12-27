import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw TypeError('amount must be a Number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw TypeError('amount must be a Number');
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
