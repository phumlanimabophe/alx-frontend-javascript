/**
 * Represents a classroom with a maximum size for students.
 */
export default class ClassRoom {
  /**
   * Initializes a ClassRoom with a maximum number of students allowed.
   * @param {number} maxStudentsSize - The maximum size allowed for students in the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
