/**
 * Generates a report object including all employees and a utility method to count departments.
 * @param {object} employeesList - An object containing department-wise employee records.
 * @returns {object} - A constructed report object with all employees and a function to count departments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
