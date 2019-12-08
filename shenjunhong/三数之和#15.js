/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //是不是可以从双数  得到一点启发 
    //双指针

    //如果现在还有一个需求是四个数呢


};





var threeSum = function(nums) {
  nums=nums.sort(function(a,b){return a-b});//先排序
  var i=0;
  var arr=[];
  while(i<nums.length-1){
    var a=nums[i],j=i+1,k=nums.length-1;
    while(j<k){
      var b=nums[j],c=nums[k];
      var sum=a+b+c;
      if(sum==0)arr.push([a,b,c]);//存起来
      if(sum<=0)
        while(nums[j]==b&&j<k)j++;//第2个数
      if(sum>=0)
        while(nums[k]==c&&j<k)k--//最后一个数
    }
    while(nums[i]==a&&i<nums.length-1)i++;//第一个数
  }
  return arr
};


var nums = [-1, 0, 1, 2, -1, -4];
var val = threeSum(nums)
console.log('val: ', val);