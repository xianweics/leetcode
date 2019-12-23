/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 颜色分类
let len = nums.length;
    let a = len, b = len, c = len;
    for(let i=0; i<len; i++){
        if(nums[i] == 0){
            nums.splice(a, 0, 0);
            a++;
        } else if(nums[i] == 1){
            nums.splice(a, 0, 1);
            b++;
        } else{
            nums.splice(a+b, 0, 2);
            c++;
        }
    }
    nums.splice(0, len);
    return nums;
// @lc code=end

