/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

 /**
  * 1. 先排序
  * 2. 两两合并 / 改变左右区间值
  * 3. 推入最后一个
  */
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) {
    return []
  }
  const res = []
  const arr = intervals.sort((a, b) => a[0] - b[0])
  let [left, right] = intervals[0], next;
  for(let i = 0; i<arr.length-1;i++) {
    next = arr[i+1]
    if (next[0] <= right) {
      right = Math.max(right, next[1])
    } else {
      res.push([left, right])
      left = next[0]
      right = next[1]
    }
  }
  res.push([left, right])
  return res
};
// @lc code=end

