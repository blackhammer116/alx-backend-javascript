const clonedCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [clonedCarSymbol]() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }

  cloneCar() {
    return this[clonedCarSymbol]();
  }
}
