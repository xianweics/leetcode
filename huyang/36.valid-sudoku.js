/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 有效的数独
var isValidSudoku = function(board) {
    let a = new Array(9).fill(0);	// 行
	let b = new Array(9).fill(0);	// 列
	let c = new Array(9).fill(0);	// 3*3
	for(let i=0; i<9; i++){
		for(let j=0; j<9; j++){
			if(board[i][j] > 0){	// 行
				a[board[i][j] - 1]++;
			}
			if(board[j][i] > 0){	// 列
				b[board[j][i] - 1]++;
			}
			if(board[parseInt(i/3)*3 + parseInt(j/3)][i%3*3 + j%3] > 0){	// 3*3
				c[board[parseInt(i/3)*3 + parseInt(j/3)][i%3*3 + j%3] - 1]++;
			}
		}
		for(let m in a){	// 行
			if(a[m] > 1)	return false;
		}
		for(let n in b){	// 列
			if(b[n] > 1)	return false;
		}
		for(let l in c){	// 3*3
			if(c[l] > 1)	return false;
		}
		a = new Array(9).fill(0);	// 行
		b = new Array(9).fill(0);	// 列
		c = new Array(9).fill(0);	// 列
	}
	return true;
};
// @lc code=end

