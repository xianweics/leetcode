# 题目
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。


```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```


# 思路
方法一：

三层循环遍历出所有可能的组合，并且求其和是否满足要求

缺点：时间复杂度略高O(n^3)

方法二：
先把两个的组合求出来，两个数的和作为key，下标作为value，保存至哈希结构的Map中

然后遍历一次数组，找  map[ 0 - array[i]], 拿到两个下标，如果都跟i不同，那么i和另外两个下标就是一个有效的解

时间复杂度为O(n^2)

方法三: 

先用O(nlogn)的代价排序，然后遍历数组，三个指针(x,l,r)分别指向，i，i+1,数组最后一个值。

跳过重复的num[x]项

如果num[x] + num[l] + num[r] < 0   则  l 右移动，因为一个固定常数 + 最大值(num[r]) +  num[l] 都小于0，那么放大 num[l]

如果num[x] + num[l] + num[r] > 0   则 r 左移动

如果 num[x] + num[l] + num[r] = 0 ，l右移动,r左移动

保持l < r

如果 遇到重复的num[l] 或者 num[r]  ,跳过

最终时间复杂度为 O(nlogn) + O(n^2)/2
# 代码
方法二的实现leetcode会 ==超出时间限制==

时间复杂度 O(n^2) + O(n^2)

```
var threeSum = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let key = nums[i] + nums[j]
      let mapVal = map.get(key)
      if (mapVal) {
        mapVal.push([i,j])
      } else {
        map.set(key, [[i,j]])
      }
    }
  }

  let result = []
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    let key = 0 - nums[i]
    let mapVal = map.get(key)
    if (mapVal) {
      mapVal.forEach((item) => {
        if (i < Math.min(item[0], item[1])) {
          // 得考虑滤除重复项
          let res = [nums[i], nums[item[0]], nums[item[1]]]
          let val = res.sort(function (a,b) { return a - b }).join(',')
          if (!set.has(val)) {
            result.push(res)
            set.add(val)
          }
        }
      })
    }
  }
  return result
};
```

方法三代码

时间复杂度  O(nlogn) + O(n^2)/2  =>  O(n^2)

```
var threeSum1 = function(nums) {
  // 先排序
  nums = nums.sort((a,b) => { return a - b})
  let result = []
  for (let i = 0; i < nums.length ; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let l = i+1
    let r = nums.length - 1
    while (l < r)  {
      let val = nums[i] + nums[l] + nums[r]
      if (val === 0) {
        result.push([nums[i], nums[l], nums[r]])
        while (nums[l] === nums[l + 1] && l + 1 < r) {
          l++
        }
        while (nums[r] === nums[r - 1] && l < r - 1) {
          r--
        }
        l++
        r--
      } else if (val > 0) {
        r--
      } else {
        l++
      }
    }
  }
  return result
}

console.log(threeSum1([-1,0,1,-1,-1,2,-1,-4]))
```
