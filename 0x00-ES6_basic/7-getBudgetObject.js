/**
 * Creates and returns a budget object containing income, GDP, and capita.
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The capita value to be included in the budget object.
 * @returns {object} - The budget object containing income, GDP, and capita.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
