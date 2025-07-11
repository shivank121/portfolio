/**
 * Save data to localStorage
 * @param {string} key - The key under which the data is stored
 * @param {*} value - The value to store (object, array, string, etc.)
 */
export const setToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error saving to localStorage (${key}):`, error);
  }
};

/**
 * Get data from localStorage
 * @param {string} key - The key to retrieve
 * @returns {*} - Parsed value or null
 */
export const getFromLocalStorage = key => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return null;
  }
};

/**
 * Remove item from localStorage
 * @param {string} key - The key to remove
 */
export const removeFromLocalStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage (${key}):`, error);
  }
};

/**
 * Clear all data from localStorage
 */
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

/**
 * Check if a key exists in localStorage
 * @param {string} key - The key to check
 * @returns {boolean}
 */
export const isInLocalStorage = key => {
  return localStorage.getItem(key) !== null;
};
