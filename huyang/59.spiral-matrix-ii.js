/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// 螺旋矩阵II
// 没通过，没想明白为啥操作res[up][i]的时候会给其它元素赋值
var generateMatrix = function(n) {
    let res = new Array(n).fill(new Array(n).fill(0));
    let k=1;	        // 每个位置的数字
    let right = n-1;	// 右
    let down = n-1;		// 下
    let left = 0;		// 左
    let up = 0;			// 上
    while(left<=right && up<=down){
    	for(let i=left;i<=right;i++){	// 向右👉
    		res[up][i] = k++;
    		console.log("res["+up+"]["+i+"]="+res[up][i]);
    	}
    	up++;
    	for(let i=up;i<=down;i++){		// 向下👇
    		res[i][right] = k++;
    		console.log("res["+i+"]["+right+"]="+res[i][right]);
    	}
    	right--;
    	for(let i=right;i>=left && up<=down;i--){	// 向左👈
    		res[down][i] = k++;
    		console.log("res["+down+"]["+i+"]="+res[down][i]);
    	}
    	down--;
    	for(let i=down;i>=up && left<=right;i--){	// 向上👆
    		res[i][left] = k++;
    		console.log("res["+i+"]["+left+"]="+res[i][left]);
    	}
    	left++;
    }
    return res;
};
// @lc code=end

