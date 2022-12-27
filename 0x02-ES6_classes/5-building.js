export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw TypeError('sqft must be a Number');
    }
    this.evacuationWarningMessage();
  }

  set sqft(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw TypeError('sqft must be a Number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Building must override evacuationWarningMessage');
  }
}
