/**
 * Represents an Airport with a name and code.
 */
export default class Airport {
  /**
   * Constructs a new instance of Airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code representing the airport.
   * @throws {TypeError} - Throws an error if arguments don't meet the expected types.
   */
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  /**
   * Customizes the string tag representation of the Airport.
   * @returns {string} - The code representing the airport.
   */
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
