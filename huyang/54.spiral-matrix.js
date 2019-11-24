/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 螺旋矩阵
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return matrix;
    let right = matrix[0].length-1;		// 右
    let down = matrix.length-1;			// 下
    let left = 0;						// 左
    let up = 0;							// 上
    let res = [];
    while(left<=right && up<=down){
    	for(let i=left;i<=right;i++){	// 向右👉
    		res.push(matrix[up][i]);
    	}
    	up++;
    	for(let i=up;i<=down;i++){		// 向下👇
    		res.push(matrix[i][right]);
    	}
    	right--;
    	for(let i=right;i>=left && up<=down;i--){	// 向左👈
    		res.push(matrix[down][i]);
    	}
    	down--;
    	for(let i=down;i>=up && left<=right;i--){	// 向上👆
    		res.push(matrix[i][left]);
    	}
    	left++;
    }
    return res;
};
// @lc code=end

