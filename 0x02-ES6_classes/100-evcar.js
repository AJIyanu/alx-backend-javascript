import car from './10-car';

export default class EVCar extends car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return super.cloneCar;
  }
}
