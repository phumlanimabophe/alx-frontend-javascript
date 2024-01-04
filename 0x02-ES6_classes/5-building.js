/**
 * Represents a Building with a square footage property.
 */
export default class Building {
  /**
   * Initializes a new instance of Building.
   * @param {number} sqft - The square footage of the building (default is 0).
   * @throws {Error} - Throws an error if a class extending Building does not override evacuationWarningMessage.
   */
  constructor(sqft = 0) {
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  /**
   * Retrieves the square footage of the building.
   * @returns {number} - The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }
}
