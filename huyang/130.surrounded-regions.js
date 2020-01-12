/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 被围绕的区域
// 未通过
// 先找到所有可能被围绕的点
// 然后依次判断是否被围绕（？）
// 记录所有被围绕的点
// 替换成X
var edit = function(x, y, board, eidtArr) {
    let flag = 0;
    for(let i in board){
        if(i < y){
            if(board[x][i] == 'X'){
                flag++;
                i=y+1;
            }
        }
        if(i > y){
            if(board[x][i] == 'X'){
                flag++;
                break;
            }
        }
    }
    for(let j in board){
        if(j < x){
            if(board[j][y] == 'X'){
                flag++;
                j = x+1;
            }
        }
        if(j > x){
            if(board[j][y] == 'X'){
                flag++;
                break;
            }
        }
    }
    if(flag == 4)   eidtArr.push([x, y]);
    return eidtArr;
};
 var solve = function(board) {
    let eidtArr = [];
    for(let i = 1; i < board.length-1; i++){
        for(let j = 1; j < board[i].length-1; j++){
            if(board[i][j] == 'O')  edit(i, j, board, eidtArr);
        }
    }
    for(let k in eidtArr){
        board[eidtArr[k][0]][eidtArr[k][1]] = 'X';
    }
    return board;
};
solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]);
solve([["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]);
// [
//     ["O","X","X","O","X"],
//     ["X","O","O","X","O"],
//     ["X","O","X","O","X"],
//     ["O","X","O","O","O"],
//     ["X","X","O","X","O"]
// ]
// @lc code=end

