/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // 由三数之和 我们是不是能推出四个  降低n的次方 ，两两
    nums=nums.sort(function(a,b){return a-b});//先排序
    var len = nums.length;
     var arr =[];
    //a + b = c + d
    for(let i = 0 ; i< len-3;i++){
      if (i > 0 && nums[i - 1] == nums[i]){
        continue
      }
      for(let j = i+1; j< len-2; j++){
        if (j > i + 1 && nums[j] == nums[j - 1]){
          continue
        }
        var l = j+1, r = len-1;
        while(l < r){
          if(target == nums[i]+ nums[j]+ nums[l]+ nums[r] ){
            arr.push([nums[i], nums[j], nums[l], nums[r]])
            while (l<r && nums[l] == nums[l+1]) l++; // 去重
            while (l<r && nums[r] == nums[r-1]) r--; // 去重
            l++;
            r--;
          } else if(nums[i]+ nums[j]+ nums[l]+ nums[r] > target){
            r--
          } else if(nums[i]+ nums[j]+ nums[l]+ nums[r] < target){
            l++;
          }
        }
      }
    }
    return arr
};
// var nums = [1, 0, -1, 0, -2, 2];
// var nums = [1, -1, 2, 3]
// var arr =
//       [
//         [-1,  0, 0, 1],
//         [-2, -1, 1, 2],
//         [-2,  0, 0, 2]
//       ];

// var val = fourSum(nums, 0);
// var nums = [-3,-2,-1,0,0,1,2,3] //0 8
var nums = [-1,-5,-5,-3,2,5,0,4]  // -7  2
var val = fourSum(nums, -7);
console.log('val: ', val);


//采用map 记录 两个数之和
// if nums[0] * 4 > target or nums[nums_len - 1] * 4 < target:
// return result

// nums_map = {}
// for i in range(nums_len-1, 0, -1):
// if i < nums_len - 1 and nums[i] == nums[i + 1]:
//     continue
// for j in range(i-1, -1, -1):
//     if j < i-1 and nums[j] == nums[j + 1]:
//         continue
//     if nums[i] + nums[j] not in nums_map:
//         nums_map[nums[i] + nums[j]] = [[j, i]]
//     else:
//         nums_map[nums[i] + nums[j]].append([j, i])

// for i in range(nums_len - 3):
// if i > 0 and nums[i] == nums[i - 1]:
//     continue
// for j in range(i+1, nums_len - 2):
//     if j > i + 1 and nums[j] == nums[j - 1]:
//         continue
    
//     dif = target - nums[i] - nums[j]
//     if dif not in nums_map:
//         continue
//     else:
//         for num in nums_map[dif]:
//             if num[0] > j:
//                 result.append([nums[i], nums[j], nums[num[0]], nums[num[1]]])
// return result
