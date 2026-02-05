/**
 * User utility functions
 * @module userUtils
 */

/**
 * Formats user objects into full name strings
 * @param {Array<{firstName: string, lastName: string}>} users
 * @returns {string[]} Array of formatted full names
 * @throws {TypeError} If users is not an array
 */
export function getFullNames(users) {
  if (!Array.isArray(users)) {
    throw new TypeError('Expected an array of user objects');
  }
  
  return users.map(({ firstName = '', lastName = '' }) => {
    const fullName = `${firstName} ${lastName}`.trim();
    return fullName || 'Anonymous';
  });
}

