/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [],
    len = nums.length
  // 1. 如果输入满足不了输出,直接返回
  if (!nums || len < 3) {
    return res
  }
  // 2. 排除全为 0 的情况
  if ([... new Set(nums)].toString() === '0') {
    return [[0,0,0]]
  }
  // 3. 排序
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 4. 如果当前值大于0, 则3数之和不可能等于0,直接结束
    if (nums[i] > 0) break
    // 5. 如果当前项 等于 之前项, 则所有组合会相同, 直接跳过
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    // 6. 确定 第二项 和 第三项, 遍历
    let l = i + 1,
      r = len - 1
    while (l < r) {
      // 7. 得到三数之和
      let sum = nums[i] + nums[l] + nums[r]
      // 8. 判断和的值
      if (!sum) {
        // 如果符合 则 推入
        res.push([nums[i], nums[l], nums[r]])
        // 关于这里的左边重复项问题,如果这里再次过滤会出现问题,其实已经在外层循环已经过滤掉了
        // while (l < r && nums[i] === nums[i + 1]) {l++}
        // 过滤掉右边重复项
        while (l < r && nums[r] === nums[r - 1]) {r--}
        // 索引变更
        l++
        r--
      } else if (sum < 0) {
        // 如果和不够,则第二项右移
        l++
      } else {
        // 如果和超出,则第三项左移
        r--
      }
    }
  }
  return res
}
// @lc code=end
