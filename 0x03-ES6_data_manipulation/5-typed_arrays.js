module.exports = function createInt8TypedArray(length, pos, value) {
  const uInt8 = new ArrayBuffer(length);
  const view = new DataView(uInt8);
  if (pos < 0 || pos >= length) {
    throw new Error('Position outside range');
  }
  view.setInt8(pos, value);
  return view;
};
