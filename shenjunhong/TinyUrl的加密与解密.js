/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  console.log('longUrl: ', longUrl);
  return longUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  console.log('shortUrl: ', shortUrl);
  return shortUrl
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 var url = 'https://leetcode.com/problems/design-tinyurl'
 console.log('val: ', decode(encode(url)));
