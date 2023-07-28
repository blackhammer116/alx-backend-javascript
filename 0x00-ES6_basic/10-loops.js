export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    array[i] = idx;
    i += 1;
  }

  return array;
}
