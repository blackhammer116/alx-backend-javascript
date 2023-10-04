const weakMap = new WeakMap();

module.exports = function queryAPI(endpoint) {
  let queryCount = weakMap.get(endpoint) || 0;
  queryCount++;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount);
};
export { weakMap };
