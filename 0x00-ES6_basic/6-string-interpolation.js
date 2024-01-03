/**
 * Generates a descriptive overview of San Francisco's financial statistics for a specific year.
 * @returns {string} - A detailed string including income, GDP, and per capita information for San Francisco.
 */
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, San Francisco ranked as the seventh-highest income county in the United States, boasting a per capita personal income of ${budget.income}. Additionally, in 2015, San Francisco proper recorded a GDP of ${budget.gdp} and a GDP per capita of ${budget.capita}.`;
}
