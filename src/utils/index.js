/**
 * Truncates a string to a specified character limit.
 * @param {String} text - The string to truncate.
 * @param {Number} limit - The maximum number of characters allowed.
 * @returns {String} - The truncated string.
 */
export const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text
  }

  let truncatedText = text.slice(0, limit)

  const lastSpaceIndex = truncatedText.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    truncatedText = truncatedText.slice(0, lastSpaceIndex)
  }

  return truncatedText + '...'
}
