/* eslint-disable */
/**
 * Implements a guardrail mechanism around the provided mathFunction.
 * @param {Function} mathFunction - The math function to be guarded against errors.
 * @returns {Array} - An array containing the result of the mathFunction or any caught error and a guardrail processing message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push("Guardrail was processed");
  }
  return queue;
}
