/**
 * Calculate the sum of initial number and two expansion values.
 * @param {number} initialNumber - The initial number.
 * @param {number} expansion1989 - Expansion value for 1989 (default: 89).
 * @param {number} expansion2019 - Expansion value for 2019 (default: 19).
 * @returns {number} - The sum of the initial number and expansion values.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
