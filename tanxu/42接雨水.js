var trap = function(height) {
  if (height.length <= 2) return 0
  let index = 0
  let sum = 0
  let temp = 0
  // 正向计算一次
  for (let i = 1; i < height.length; i++) {
     if (height[index] === 0) {
       index--
       continue
     }
     if (height[i] < height[index]) {
       temp += height[index] - height[i]
     } else {
       sum += temp
       temp = 0
       index = i
     }
  }
  let ind = index
  // 反向计算一次
  index = height.length - 1
  temp = 0
  for (let i = height.length - 2; i >= ind; i--) {
    if (height[index] === 0) {
      index++
      continue
    }
    if (height[i] < height[index]) {
      temp += height[index] - height[i]
    } else {
      sum += temp
      temp = 0
      index = i
    }
  }
  return sum
};

console.log(trap([4,2,3]))
