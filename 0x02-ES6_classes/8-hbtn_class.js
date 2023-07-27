export default class HolbertonClass {
  constructor(size, Location) {
    this._size = size;
    this._location = Location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
