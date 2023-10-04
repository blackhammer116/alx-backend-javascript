module.exports = function cleanSet(set, startString) {
  let result = '';
  if (startString.length === 0) {
    return result;
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result = result.concat('-',cleanedValue);
    }
  }
  result = result.slice(1);
  return result;
};
