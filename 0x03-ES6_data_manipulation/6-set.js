module.exports = function setFromArray(list) {
  const set1 = new Set();

  for(const value of list) {
    set1.add(value);
  }
  return set1;
};
