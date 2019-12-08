// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：

// 答案中不可以包含重复的四元组。

// 示例：

// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length;
    if (len < 4) return [];
    nums = nums.sort((a, b) => a - b);
    let result = [];
    for (let a = 0; a < len - 3;) {
      for (let b = a + 1; b < len - 2;) {
        for (let c = b + 1, d = len - 1; c < d;) {
          let t = nums[a] + nums[b] + nums[c] + nums[d];
          if (t === target) {
            result.push([nums[a], nums[b], nums[c], nums[d]])
            do {
              c++;
            } while(c < d && nums[c] === nums[c - 1]);
            do {
              d--;
            } while(c < d && nums[d] === nums[d + 1])
          } else if (t > target) {
            d--;
          } else {
            c++;
          }
        }
        do {
          b++;
        } while(b < len - 2 && nums[b] === nums[b - 1])
      }
      do {
        a++;
      } while(a < len - 3 && nums[a] === nums[a - 1])
    }
    return result;
  };
  