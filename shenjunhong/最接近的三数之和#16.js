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
    var recordNum = 1;
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
          arr.push([nums[i],nums[l], nums[r]])
          // Math.min
          l++
        } else if(sum > target){
          arr.push([nums[i],nums[l], nums[r]])
          r-- 
        }
      }
    }
    console.log('arr2: ', arr);
    arr2 = arr.sort(function(a, b) {
      return Math.abs((a[0]+a[1]+a[2]) - target) - Math.abs((b[0]+b[1]+b[2]) - target);
    })[0];
    return Number(arr2[0])+ Number(arr2[1]) + Number(arr2[2])
};

// var  nums = [-1,2,1,-4],  target = 1;
var  nums = [0,1,2], target = 3;

var val = threeSumClosest(nums, target);
console.log('val: ', val);
// 2. (-1 + 2 + 1 = 2).

