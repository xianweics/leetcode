/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums=nums.sort(function(a,b){return a-b});//先排序

    //是不是可以从双数  得到一点启发 
    //双指针

    //如果现在还有一个需求是四个数呢
    // 我们先要对nums排序，然后我们只要考虑nums[i] <= 0的部分，因为当nums[i] > 0时，必然会造成nums[i], nums[l], nums[r]全部>0，这显然不对。当i > 0时，我们要考虑nums[i - 1] == nums[i]，如果成立，我们要跳出本次循环，执行++i，直到不成立为止。

    //新建一个array
    var arr = [];
    //三个数 a,b,c
    //a = b+c 

    var len = nums.length;
    var r = nums.length -1;
    var sum = 0;
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
        if(sum == 0){
          arr.push([nums[i],nums[l], nums[r]]);
          while (l<r && nums[l] == nums[l+1]) l++; // 去重
          while (l<r && nums[r] == nums[r-1]) r--; // 去重
          l++;
          r--;
        } else if(sum < 0){
          l++
        } else if(sum > 0){
          r-- 
        }
      }
    }
    return arr
};
// class Solution {
//   public static List<List<Integer>> threeSum(int[] nums) {
//       List<List<Integer>> ans = new ArrayList();
//       int len = nums.length;
//       if(nums == null || len < 3) return ans;
//       Arrays.sort(nums); // 排序
//       for (int i = 0; i < len ; i++) {
//           if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
//           if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
//           int L = i+1;
//           int R = len-1;
//           while(L < R){
//               int sum = nums[i] + nums[L] + nums[R];
//               if(sum == 0){
//                   ans.add(Arrays.asList(nums[i],nums[L],nums[R]));
//                   while (L<R && nums[L] == nums[L+1]) L++; // 去重
//                   while (L<R && nums[R] == nums[R-1]) R--; // 去重
//                   L++;
//                   R--;
//               }
//               else if (sum < 0) L++;
//               else if (sum > 0) R--;
//           }
//       }        
//       return ans;
//   }
// }




// var threeSum = function(nums) {
//   nums=nums.sort(function(a,b){return a-b});//先排序
//   console.log('nums: ', nums);
//   console.log('nums: ', nums.length);
//   var i=0;
//   var arr=[];
//   while(i<nums.length-1){
//     var a=nums[i],j=i+1,k=nums.length-1;
//     while(j<k){
//       var b=nums[j],c=nums[k];
//       var sum=a+b+c;
//       if(sum==0)arr.push([a,b,c]);//存起来
//       if(sum<=0)
//         while(nums[j]==b&&j<k)j++;//第2个数
//       if(sum>=0)
//         while(nums[k]==c&&j<k)k--//最后一个数
//     }
//     while(nums[i]==a&&i<nums.length-1)i++;//第一个数
//   }
//   return arr
// };


var nums = [-1, 0, 1, 2, -1, -4];
var val = threeSum(nums)
console.log('val: ', val);