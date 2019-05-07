import slice from '../slice.js'

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array: Array, start: number, end: any) {
  const { length } = array
  end = end === undefined ? length : end
  return (!start && end >= length) ? array : slice(array, start, end)
}

export default castSlice