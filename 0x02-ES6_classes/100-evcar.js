/**
 * Represents an Electric Vehicle (EV) Car extending the Car class.
 */
import Car from './10-car';

class EVCar extends Car {
  /**
   * Constructs a new instance of EVCar.
   * @param {string} brand - The brand of the EV car.
   * @param {string} motor - The motor type of the EV car.
   * @param {string} color - The color of the EV car.
   * @param {string} range - The range of the EV car.
   */
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Retrieves the Symbol.species property of the EVCar class.
   * @returns {Function} - The Symbol.species property of the class (Car class).
   */
  static get [Symbol.species]() {
    return Car;
  }
}

export default EVCar;
