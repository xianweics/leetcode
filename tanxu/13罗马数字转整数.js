// 罗马数字转整数
// 时间复杂度O(n)
// 空间复杂度O(n)

var romanToInt = function(s) {
  let map = new Map()
  map.set("M", 1000)
  map.set("CM", 900)
  map.set("D", 500)
  map.set("CD", 400)
  map.set("C", 100)
  map.set("XC", 90)
  map.set("L", 50)
  map.set("XL", 40)
  map.set("X", 10)
  map.set("IX", 9)
  map.set("V", 5)
  map.set("IV", 4)
  map.set("I", 1)

  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i] + s[i+1])) {
      res += map.get(s[i] + s[i+1])
      i++
    } else {
      res += (map.get(s[i]) || 0)
    }
  }
  return res
};

console.log(romanToInt("CMVIII"))
