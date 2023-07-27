import Car from './10-car';

const clonedCarSymbol = Symbol('cloneCar');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  [clonedCarSymbol]() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }

  cloneCar() {
    return this[clonedCarSymbol]();
  }
}
