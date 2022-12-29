import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof (floors) === 'number') {
      this._floors = floors;
    } else {
      throw TypeError('floors must be a Number');
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
