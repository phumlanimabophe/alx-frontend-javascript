/**
 * Represents a Currency with code and name properties.
 */
export default class Currency {
  /**
   * Initializes a new instance of Currency.
   * @param {string} code - The code representing the currency.
   * @param {string} name - The name of the currency.
   * @throws {TypeError} - Throws an error if arguments don't meet the expected types.
   */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  /**
   * Retrieves the name of the currency.
   * @returns {string} - The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Retrieves the code of the currency.
   * @returns {string} - The code representing the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets a new name for the currency.
   * @param {string} name - The new name to be set for the currency.
   * @throws {TypeError} - Throws an error if the argument is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Sets a new code for the currency.
   * @param {string} code - The new code to be set for the currency.
   * @throws {TypeError} - Throws an error if the argument is not a string.
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  /**
   * Constructs a string containing the name and code of the currency.
   * @returns {string} - A formatted string with the name and code of the currency.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
