module.exports = function hasValuesFromArray(set, array1) {
  const n = array1.values();
  for (const i of n) {
    if (!(set.has(i))) {
      return false;
    }
  }
  return true;
};
