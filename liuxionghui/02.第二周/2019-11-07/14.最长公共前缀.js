// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b) => a.length - b.length > 0);
    let str = strs[0] || '';
    
    for(let i = 0; i < strs.length; i++) {
      for (let j = 0; j < str.length; j ++) {
        if (strs[i][j] !== str[j]) {
          if (j === 0) return ''
          str = str.substr(0, j);
        }
      }
    }
    return str;
  };
