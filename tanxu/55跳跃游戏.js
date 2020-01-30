/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = 1
    for (let i = nums.length - 2; i >= 0; i--) {

        if(nums[i]>=n)
        {
            n = 1;
        }
        else
        {
            n++;
        }

        if(i===0 && n>1)
        {
            return false;
        }
    }
    return true
};


console.log(canJump([2,0,0]))
