/**
 * Creates an object with a department name as a key and employees as its value.
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - The array of employees belonging to the department.
 * @returns {object} - An object containing the department name as key and employees as the associated value.
 */
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
