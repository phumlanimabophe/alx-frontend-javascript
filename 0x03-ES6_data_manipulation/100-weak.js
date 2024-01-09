/*
  Exported: weakMap
  Description: WeakMap instance to store endpoint data
*/
export const weakMap = new WeakMap();

/*
  Function: queryAPI
  Description: Queries an API endpoint and manages its load count in the WeakMap.
  Parameters:
    - endpoint: The API endpoint to query and manage load count
  Throws:
    - Throws an error if the endpoint load count is high (4 or more)
*/
export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) { // Check if the endpoint exists in the WeakMap
    const endpointData = weakMap.get(endpoint); // Get the endpoint's load count
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high'); // Throw an error if load count is high
    }
    weakMap.set(endpoint, (endpointData + 1)); // Increment the endpoint's load count
  } else {
    weakMap.set(endpoint, 1); // Set initial load count for the endpoint
  }
};
