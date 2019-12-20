/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums=nums.sort(function(a,b){return a-b});//先排序

  // 最接近  我们可以跟目标值做对比， 相当于找最优解
  // 所以我们要将每次的最优解 做对比
    //新建一个array
    var arr = [];
    //三个数 a,b,c
    //a = b+c 
    var sum = 0;
    var len = nums.length;
    var r = nums.length -1;
    if(nums == null || len < 3){
      return arr
    }
    for(let i =0 ; i< len; i++){
      if(i> 0 && nums[i] == nums[i-1]){
        continue
      }
      var l = i+1;
      var r = len -1;
      while(l < r){
        sum = nums[i] + nums[l] + nums[r];
        if(target == sum){
          arr.push([nums[i],nums[l], nums[r]]);
          while (l<r && nums[l] == nums[l+1]) l++; // 去重
          while (l<r && nums[r] == nums[r-1]) r--; // 去重
          l++;
          r--;
        } else if(sum < target){
          l++
        } else if(sum > target){
          r-- 
        }
      }
    }
    return arr
};

var  nums = [-1,2,1,-4],  target = 1;
var val = threeSumClosest(nums, target);
console.log('val: ', val);
// 2. (-1 + 2 + 1 = 2).

