/**
 * Concatenates two arrays and a string into a new array.
 * @param {Array} array1 - The first array to be concatenated.
 * @param {Array} array2 - The second array to be concatenated.
 * @param {string} string - The string to be spread and concatenated.
 * @returns {Array} - The concatenated array containing elements of array1, array2, and characters of the string.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
