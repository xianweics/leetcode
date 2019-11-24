/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) return []

    let result = []
    let wordsMap = initMap(words)
    let wordLen = words[0].length
    let sumLen = words[0].length * words.length
    for (let i = 0; i< s.length; i++) {
        if (i + sumLen > s.length) break
        let subStr = s.substring(i, i + sumLen)
        if (isMatch(subStr, wordsMap, wordLen)) {
            result.push(i)
        }
    }
    return result
};

function initMap(words) {
    let map = new Map()
    for (let i = 0; i < words.length; i++) {
        if (map.get(words[i])) {
            map.set(words[i], map.get(words[i]) + 1)
        } else {
            map.set(words[i], 1)
        }
    }
    return map
}

function isMatch(subStr, wordsMap, wordLen) {
    // 这个map保存已匹配的word数量
    let map = new Map()
    let word = ''
    for (let i = 0; i < subStr.length; i++) {
        word += subStr[i]
        if ((i + 1) % wordLen === 0) {
            // word的个数
            let wordNum = wordsMap.get(word) || 0
            // 剩余的word个数
            let leftWodNum = wordNum - (map.get(word) || 0)
            if (wordNum > 0 && leftWodNum > 0) {
                if (map.get(word)) {
                    map.set(word, map.get(word) + 1)
                } else {
                    map.set(word, 1)
                }
            } else {
                return false
            }
            word = ''
        }
    }
    return true
}

console.log(findSubstring('wordgoodgoodgoodbestword',["word","good","best","word"]))
