/**
 * Combines the elements of an iterator's array into a string using '|' as the separator.
 * @param {Array} reportWithIterator - An array obtained from an iterator object.
 * @returns {string} - A string created by joining iterator's array elements with '|' as the delimiter.
 */
export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
