/**
 * Retrieves the current year using Date object's method and returns it.
 * @returns {number} - The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Generates a budget object for the current year with specified income, GDP, and capita values.
 * @param {string} income - The income amount to be assigned for the current year.
 * @param {string} gdp - The GDP value to be assigned for the current year.
 * @param {string} capita - The capita amount to be assigned for the current year.
 * @returns {object} - The budget object for the current year containing income, GDP, and capita.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
