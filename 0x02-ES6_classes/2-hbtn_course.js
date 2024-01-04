/**
 * Represents a Holberton course with name, length, and students' information.
 */
export default class HolbertonCourse {
  /**
   * Creates a new instance of HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The duration/length of the course.
   * @param {string[]} students - An array containing the names of students enrolled in the course.
   * @throws {TypeError} - Throws an error if arguments don't meet the expected types.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Retrieves the name of the course.
   * @returns {string} - The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Retrieves the length of the course.
   * @returns {number} - The length/duration of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Retrieves the array of students enrolled in the course.
   * @returns {string[]} - An array containing the names of students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets a new name for the course.
   * @param {string} name - The new name to be set for the course.
   * @throws {TypeError} - Throws an error if the argument is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Sets a new length/duration for the course.
   * @param {number} length - The new length to be set for the course.
   * @throws {TypeError} - Throws an error if the argument is not a number.
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Sets new students' information for the course.
   * @param {string[]} students - An array containing the names of students to be enrolled in the course.
   * @throws {TypeError} - Throws an error if the argument is not an array of strings.
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
