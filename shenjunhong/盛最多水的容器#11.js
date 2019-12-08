/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //感觉这道题本质上就是求最大值
    //(x, y ) 循环一遍
    // 将 y 轴传进入  在手动补齐x轴
    var arr =[]
    for(let i = 1; i <= height.length;i++){
      var k = {};
      k.x = i;
      k.y = height[i-1];
      arr.push(k)
    }
    var newArr = []
    for(let j of arr){
      for(let i of arr){
        var val  = Math.abs((i.x - j.x) * (i.y - j.y));
        console.log('val: ', val);
        newArr.push(val)
      }      
    }
    console.log('arr: ', newArr);
};

var val = maxArea([1,8, 6, 2, 5, 4, 8, 3, 7])
console.log('val: ', val);


//以下是另一种双指针解法


var maxArea = function(height) {
  let i = 0,
      j = height.length - 1;
  let max = 0
  while (i < j) {
    max = Math.max(max, Math.min(height[i],height[j]) * (j-i))
    if (height[i] >= height[j]) {
      j--
    } else {
      i++
    }
  }
  return max

}