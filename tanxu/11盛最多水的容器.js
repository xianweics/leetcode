// 方法一 穷举法
var maxArea = function(height) {
  let array = []
  let maxArea = 0
  for (let i = 0; i < height.length; i++) {
    maxArea = Math.max(maxArea, getMaxArea(array, height[i],maxArea))
    array.push(height[i])
  }
  return maxArea
};

function getMaxArea (array, height) {
  let maxArea = 0
  let len = array.length
  if (len === 0) {
    return 0
  }
  for (let i = 0; i< array.length; i++)  {
    let area = Math.min(height,array[i]) * (array.length - i)
    maxArea = Math.max(maxArea, area)
  }
  return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))


// 方法二  两个下标，分别指向开头和结束，从两边开始算最大面积
var maxArea1 = function(height) {
  let i = 0
  let j = height.length - 1
  let maxArea = 0
  while (i < j) {
    let area = Math.min(height[i],height[j]) * (j - i)
    maxArea = Math.max(area, maxArea)
    height[i] < height[j] ? i++ : j--
  }
  return maxArea
};
console.log(maxArea1([1,8,6,2,5,4,8,3,7]))
