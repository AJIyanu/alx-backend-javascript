import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    this.car = new Car(this._brand, this._motor, this._motor);
    return this.car;
  }
}
