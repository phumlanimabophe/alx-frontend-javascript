/*
  Function: groceriesList
  Description: This function generates a groceries list using a Map data structure.
  Returns:
    - A Map containing various groceries along with their respective quantities
*/
const groceriesList = () => {
  const map = new Map();

  // Adding items to the groceries list with their quantities
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);

  return map; // Return the groceries list as a Map
};

export default groceriesList; // Exporting the groceriesList function
