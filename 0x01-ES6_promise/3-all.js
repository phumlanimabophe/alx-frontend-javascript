/* eslint-disable*/

/* eslint-disable */
/**
 * Manages the profile signup process by performing photo upload and user creation concurrently.
 * @returns {Promise} - A Promise representing the completion of both uploadPhoto and createUser operations.
 */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then((result) => { 
		console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`,
		);
	})

.catch((error) => {
console.log('Signup system offline');
	});
}
