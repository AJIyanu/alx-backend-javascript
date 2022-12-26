export default class Currency {
  constructor (code, name) {
    if (typeof (code) === 'string') {
      this._code = code;
    } else {
      throw TypeError('code must be a String');
    }
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw TypeError('name must be a String');
    }
  }

  displayFullCurrency () {
    return this._name + ' (' + this._code + ')';
  }
}
