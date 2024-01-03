/**
 * Modifies an array by appending a string to each of its values.
 * @param {Array} array - The input array to modify.
 * @param {string} appendString - The string to add to each value in the array.
 * @returns {Array} - The modified array with the string appended to its values.
 */
export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (const value of array) {
    // eslint-disable-next-line
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
