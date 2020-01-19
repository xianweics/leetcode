/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */
/**
 * 1, 先将字符串排序成一样的
 * 2, map找到相同的索引
 * 3, 推入数组中
 */
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let arr = strs.map(item => {
        return item.split('').sort().join('')
    })
    let res = [], obj = {}
    arr.forEach((item, index) => {
        if (obj[item]) {
            obj[item].push(index)
        } else {
            obj[item] = []
            obj[item].push(index)
        }
    })
    // console.log(obj)
    Object.keys(obj).forEach(item => {
        res.push(obj[item].map(it => {
            return strs[it]
        }))
    })
    return res
};
// @lc code=end

