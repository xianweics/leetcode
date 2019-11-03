## LeetCode 之旅
### 1. 两数之和

> 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

方法一：暴力法
- 时间复杂度 O(n^2)
- 空间复杂度 O(1)

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums,target){
    for(var i =0; i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            //确保判断的俩个值都不相等
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
}
```
> 方法二：hsah法

思考：通过hash法，性能较快

- 时间复杂度 O(n)
- 空间复杂度 O(1)
```
function twoSum(nums, target){
    var result = {};
    var len = nums.length;
    for(var i=0;i<len;i++){
        var diff = target - nums[i];
        if(diff in result){
            return [result[diff],i]
        }else{
            result[nums[i]]=i;
        }
    }
}
```
### 2.两个数组的交集

> 题目描述

给定两个数组，编写一个函数来计算它们的交集。

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 ```
 >方法一：暴力法
  - 解题思路    
    1. 把俩个数组中相同元素放到一个新的数组中
    2. 然后对数组去重
 ```
var intersection = function(nums1, nums2) {
    var arr =[]
    for(var i= 0;i<nums1.length;i++){
      for(var j= 0;j<nums2.length;j++){
          if(nums1[i] == nums2[j]){
              arr.push(nums1[i])
          }
      }
    }
    var obj = {}
    for(var k = 0;k<arr.length;k++){
        obj[arr[k]] = arr[k]
    }
    arr = Object.keys(obj)
    return arr
};
```
  - 算法分析
    - 时间复杂度: `O(n^2)`
    - 空间复杂度: `O(n)`


### 3. 最后一个单词的长度

> 题目描述

给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

> 示例:

输入: "Hello World"
输出: 5

> 方法一

> 解题思路：
- 1.答题思路就是通过字符串的split方法把字符串 通过‘’ ，转成数组，得到最后一个单词，算出长度。
- 2.考虑边界条件
    - 1.字符串是否就是 由 ‘ ’ 组成
    - 2.split后最后一个元素是否为 ‘’ ，做删除操作

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.indexOf(' ') == -1 ) return s.length;
        var arr = s.split(' ');

     function empty(arr){
      for(var i = 0;i<arr.length;i++){
        if(arr[i] !== ''){
            return true
        }
    } 
         return false
    }
    if(!empty(arr)) return 0
   
    function removelast(arr){
        if(arr[arr.length-1]==0){
            arr.pop()
            removelast(arr)
        }
        return arr
    }
     removelast(arr)
   var last = arr[arr.length-1];
    var lastarr = last.split('');
    return lastarr.length
};
```

