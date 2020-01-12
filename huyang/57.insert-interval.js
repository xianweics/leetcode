/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// 插入区间
// 先插入，再合并
// 插入数组并按升序排序
var sortInsert = function (arr, n){
    for(let i in arr){
    	if(n<=arr[i]){
    		arr.splice(i, 0, n);
    		return arr;
    	}
    }
    arr.push(n);
    return arr;
}
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    let a = [];     // 区间左边
	let b = [];     // 区间右边
	for(let i in intervals){
		a = sortInsert(a, intervals[i][0]);
		b = sortInsert(b, intervals[i][1]);
	}
    for(let i=a.length-1; i>0; i--){
    	if(a[i] <= b[i-1]){
            a.splice(i, 1);
    	    b.splice(i-1, 1);
        }
    }
    return a.map((item, i) => [item, b[i]]);;
};
// @lc code=end

