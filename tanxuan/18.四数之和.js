/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [],
    len = nums.length;
  // 1. 如果输入满足不了输出,直接返回
  if (!nums || len < 4) {
    return res;
  }
  // 2. 排除全为 0 且 目标值为 0 的情况
  // if ([...new Set(nums)].toString() === '0' && target === 0) {
  //   return [[0, 0, 0, 0]];
  // }
  // 3. 排序
  nums = nums.sort((a, b) => a - b);
  // console.log(nums);
  for (let i = 0; i < len - 3; i++) {
    if (nums[i] > 0 && nums[i] > target) break;
    // 5. 如果当前项 等于 之前项, 则所有组合会相同, 直接跳过
    if (nums[i] == nums[i - 1]) continue;
    // 6. 转换成 3数之和
    let newTarget = target - nums[i];

    // 求取3数之和
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      // 确定左索引 和 右索引
      let l = j + 1,
        r = len - 1;

      // 转换成求两数之和
      let newTarget2 = newTarget - nums[j]
      // console.log(newTarget, newTarget2);

      // 求两数和
      while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum === newTarget2) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          // while (l < r && nums[l] === nums[l + 1]) {
          //   l++;
          // }
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        } else if (sum > newTarget2) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return res;
};
// @lc code=end
