/* eslint-disable */
/**
 * Performs division operation with the provided numerator and denominator.
 * @param {number} numerator - The value to be divided (numerator).
 * @param {number} denominator - The value to divide by (denominator).
 * @throws {Error} - Throws an error when attempting to divide by 0.
 * @returns {number} - The result obtained by dividing the numerator by the denominator.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("cannot divide by 0");
  }
  return numerator / denominator;
}
