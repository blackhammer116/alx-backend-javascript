module.exports = function updateUniqueItems(newMap) {
  if (!(newMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of newMap.entries()) {
    if (value === 1) {
      newMap.set(key, 100);
    }
  }
};
