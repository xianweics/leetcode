// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。
// 示例 1:
// nums1 = [1, 3]
// nums2 = [2]
// 则中位数是 2.0

// 示例 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5
// 方法一：用下标去寻找中位数  时间复杂度O(m+n)
var findMedianSortedArrays1 = function(nums1, nums2) {
  var len = nums1.length + nums2.length
  // 记录中位数所在下标
  var midIndex = []
  // 记录中位数
  var midVal = []
  var totalIndex = 0
  if (len % 2 === 0) {
    midIndex = [len/2 - 1, len/2]
  } else {
    midIndex = [(len/2).toFixed(0) - 1]
  }
  var index1 = 0
  var index2 = 0
  var currentVal = []
  while (totalIndex < len) {
    // 交换,数组长度小的在前
    var temp = nums1
    if (nums1.length > nums2.length) {
      nums1 = nums2
      nums2 = temp
    }
    var tempVal = null
    // 判断大小
    if (nums1[index1] < nums2[index2]) {
      tempVal = nums1[index1]
      index1++
    } else {
      if (index2 > nums2.length - 1) {
        tempVal = nums1[index1]
      } else{
        tempVal = nums2[index2]
        index2++
      }
    }
    // console.log(tempVal)
    // 中位数有两个的情况
    if (midIndex.length === 2) {
      if (totalIndex === midIndex[0]) {
        midVal[0] = tempVal
      }
      if (totalIndex === midIndex[1]) {
        midVal[1] = tempVal
        break
      }
    } else {// 中位数只有一个的情况
      if (totalIndex === midIndex[0]) {
        midVal[0] = tempVal
        break
      }
    }
    totalIndex++
  }
  // console.log(midVal)
  if (midVal[0] + midVal[1] === 0) {
    return 0
  } else {
    return midVal.length === 1 ? midVal[0] : (midVal[0] + midVal[1])/2
  }
};
// console.log(findMedianSortedArrays1([1,3],[2,5]))

// 方法2  二分查找排除的方式去找   时间复杂度O(log（m+n）)

var findMedianSortedArrays2 = function(nums1, nums2) {
  var len1 = nums1.length
  var len2 = nums2.length
  var lenSum = len1 + len2
  // 记录第几数个是中位数，如果有两个就取下标小的
  var midIndex = Math.ceil(lenSum/2)
  // 取一半中位数的个数，和两个数组长度  中最小得值
  var k = Math.floor(midIndex/2)
  // 已排除个数
  var paichu = 0
  // console.log(k, nums1,nums2)
  // 当已排除个数 < 需要排除的个数
  while (paichu < midIndex - 1) {
    if (nums1.length === 0 || nums2.length === 0) {
      break
    }
    if (nums1[Math.min(k - 1, len1 - 1)] < nums2[Math.min(k - 1, len2 - 1)]) {
      // 排除k个
      nums1.splice(0, k)
      len1 = nums1.length
    } else {
      // 排除k个
      nums2.splice(0, k)
      len2 = nums2.length
    }
    // 已排除
    paichu += k
    // 再次计算一次处理 需要排除的个数
    k = Math.floor((midIndex - paichu)/2)
    // console.log(k, nums1, nums2)
  }
  if (nums1.length === 0) {
     return lenSum %2 === 0 ? (nums2[len2 - midIndex - 1] + nums2[len2 - midIndex]) /2 : nums2[Math.max(len2 - midIndex,0)]
  }
  if (nums2.length === 0) {
    return lenSum %2 === 0 ? (nums1[len1 - midIndex - 1] + nums1[len1 - midIndex])/2 : nums1[Math.max(len1 - midIndex,0)]
  }
  // console.log(nums1, nums2)
  // 四选二   选最小的两个
  var array = [nums1[0],nums1[1],nums2[0],nums2[1]]
  array.sort(function (a,b) {
    return a - b
  })
  return lenSum %2 === 0 ? (array[0] + array[1])/2 : Math.min(nums1[0], nums2[0])
}

console.log(findMedianSortedArrays2([2],[1,3,4,5]))
