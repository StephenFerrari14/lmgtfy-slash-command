/**
 * Get LMGTFY Link for query
 * 
 * @param {string} query 
 */
const getLMGTFYLink = query => `http://lmgtfy.com/?q=${query}`

/**
 * Get LMGTFY Link for Slack message
 * 
 * @param {string} query 
 */
const getLMGTFYSlackLink = query => ['<', getLMGTFYLink(query), '|', `Search results for ${query}>`].join('')

module.exports = {
    getLMGTFYLink,
    getLMGTFYSlackLink
}