/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 杨辉三角
// 用临时数组tmp来存储下一个数组
var generate = function(numRows) {
    let res = [];
    let tmp = [1];
    for(let i=0; i<numRows; i++){
    	res.push(tmp);
    	if(res[i].length == 1){
    		tmp = [1,1];
    	} else{
    		tmp = [1];
    		for(let j=0; j<res[i].length-1; j++){
    			tmp.push(res[i][j] + res[i][j+1]);
    		}
    		tmp.push(1);
    	}
    }
    return res;
};
// @lc code=end

