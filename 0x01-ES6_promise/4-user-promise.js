/**
 * Simulates the signup of a user by creating a Promise that resolves with user's first and last name.
 * @param {string} firstName - The first name of the user to sign up.
 * @param {string} lastName - The last name of the user to sign up.
 * @returns {Promise} - A Promise resolving to an object with the provided first and last names.
 */
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
