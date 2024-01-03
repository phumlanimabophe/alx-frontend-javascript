/**
 * Creates an iterator object by flattening the employee information from the report.
 * @param {object} report - The report object containing department-wise employee records.
 * @returns {Array} - An array of employees obtained by iterating through the report's employee data.
 */
export default function createIteratorObject(report) {
  const emps = [];
  // eslint-disable-next-line
  for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
    for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
