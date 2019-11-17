// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
// 说明:

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
var strStr = function(haystack, needle) {
    let ret = haystack.match(needle);
    return ret === null ? -1 : ret.index;
};

// match 方法返回一个结果数组，在没有指定正则修饰符g的时候，会额外提供index属性来表示位置，
// 只是如果没有查找到，match返回的值为null。




var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
// indexOf 是最切合要求的，原本就是题目中要求的功能：


var strStr = function(haystack, needle) {
    return haystack.search(needle);
};
// search 方法与 indexOf 方法功能基本一样，只是search支持正则作为参数，则indexOf不支持