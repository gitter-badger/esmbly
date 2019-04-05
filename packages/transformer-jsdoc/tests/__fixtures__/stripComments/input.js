/**
 * US-Proto 2
 * As a package maintainer, I want to take a simple JavaScript
 * program with JSDoc comments and transform it to TypeScript using
 * the JSDoc transformer.
 */

// Some comment

/**
 * Left pads the string.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
function padLeft(str, maxLength) {
  let s = str; // Inline comment
  while (s.length < maxLength) {
    s = ` ${s}`;
  }
  return s;
}

/**
 * Right pads the string.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
function padRight(str, maxLength) {
  let s = str;
  // Inline comment
  while (s.length < maxLength) {
    s = `${s} `;
  }
  return s;
}

/**
 * Checks if the string is padded.
 * @param {string} str
 * @returns {boolean}
 */
function isPadded(str) {
  return str.length !== str.trim().length;
}

module.exports = {
  isPadded,
  padLeft,
  padRight,
};
