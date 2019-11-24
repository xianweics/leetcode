# 题目

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。


```
示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:
```


当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。



# 思路


用一个数组保存needle 第一个字符在 haystack的位置，
如果匹配失败，则从下一个第一个字符匹配的位置开始匹配

如 haystack = “mississipi”     needle = 'issipi'

第一次匹配到 i以后，从位置1开始匹配，直到到issis 与 issip不匹配，那么回到上个第一字符i匹配的位置开始匹配,即从位置4开始匹配

这个位置保存在数组 [1,4,7,9] 中，这样就减少了暴力匹配重复匹配的降低效率问题

# 代码


```
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    let index = 0
    let firstMatchs = []
    let n = 1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && i > (firstMatchs[firstMatchs.length - 1] || -1) ) {
            firstMatchs.push(i)
        }
        if (haystack[i] === needle[index]) {
            index++
        } else {
            // 匹配失败，从第n个第一字符相同开始匹配
            index = 0
            if (n < firstMatchs.length) {
                i = firstMatchs[n] - 1
                n++
                continue
            }
        }
        if (index === needle.length) {
            return i - index + 1
        }
    }
    return -1
};

console.log(strStr("mississipi",'issipi'))
```
