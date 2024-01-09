/*
  Function: cleanSet
  Description: This function cleans a Set by extracting strings that start with a specified string
               and concatenating them with a hyphen ('-').
  Parameters:
    - set: Set object containing strings to be cleaned
    - startString: String used to filter and clean the Set
  Returns:
    - A string containing extracted and concatenated strings from the Set, separated by a hyphen ('-')
               or an empty string if startString is empty or not a string
*/
const cleanSet = (set, startString) => {
  const strings = [];

  // Return an empty string if startString is empty or not a string
  if (startString === '' || typeof startString !== 'string') return '';

  // Extract strings from the set that start with the specified startString
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      strings.push(s.slice(startString.length)); // Remove the startString from the beginning of the strings
    }
  });

  // Join the extracted strings with a hyphen ('-')
  return strings.join('-');
};

export default cleanSet; // Exporting the cleanSet function
