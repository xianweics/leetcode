/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 杨辉三角II
// tmp用来存放前一个数组，结果res需要由tmp求出
var getRow = function(rowIndex) {
    if(rowIndex == 0)   return [1];
    if(rowIndex == 1)   return [1, 1];    
    let tmp = [1, 1];
    let res = [1];
    for(let i=1; i<rowIndex; i++){
        res = [1];
		for(let j=0; j<tmp.length-1; j++){
			res.push(tmp[j] + tmp[j+1]);
		}
		res.push(1);
        tmp = [...res];
    }
    return res;
};
// @lc code=end

