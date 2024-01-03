/* eslint-disable */
/**
 * Generates a Promise based on the success parameter, resolving to a success response or rejecting with an error.
 * @param {boolean} success - A boolean value indicating the desired success (true) or failure (false) of the API call.
 * @returns {Promise} - A Promise resolving to a success response or rejecting with an error description.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
