import { uploadPhoto, createUser } from './utils';

/**
 * Handles asynchronous photo upload and user creation, returning their data or null in case of errors.
 * @returns {Promise<Object>} - A Promise resolving to an object containing photo and user data or null values.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({
      photo, user,
    });
  } catch (err) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}
