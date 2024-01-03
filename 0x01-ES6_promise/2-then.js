/* eslint-disable */
/**
 * Handles a Promise returned from an API by returning a success response, catching errors, and logging a final message.
 * @param {Promise} promise - A Promise object returned from an API call.
 * @returns {Promise} - A Promise that resolves to a success response or catches errors, and logs a final message.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
