module.exports = function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result += cleanedValue + '-';
    }
  }
  result = result.slice(0, -1);
  return result;
};
