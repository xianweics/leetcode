/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  //根据皇后的特性 上下左右八个方向 都不能防置
  /**
   * @param {number} n
   * @return {string[][]}
   * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
   * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
   */

  /*
   * 回溯算法实际上一个类似枚举的搜索尝试过程，
   * 主要是在搜索尝试过程中寻找问题的解，
   * 当发现已不满足求解条件时，就“回溯”返回，
   * 尝试别的路径。回溯法是一种选优搜索法，按选优条件向前搜索，
   * 以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，
   * 就退回一步重新选择，这种走不通就退回再走的技术为回溯法，
   * 而满足回溯条件的某个状态的点称为“回溯点”。
   * 许多复杂的，规模较大的问题都可以使用回溯法，
   * 有“通用解题方法”的美称。
   * */

  //来源于八皇后问题,使用的是回溯算法
  var solveNQueens = function (n) {
    //最终返回的答案
    var result = [];
    //缓存在递归过程中前面行的列数,已经有的列数就不必再进行可行性判断了
    var columnCache = [];

    //先构建一个n*n的棋盘,初始化时不放置任何皇后
    var chessboard = [];
    for (var index = 0; index < n; index++) {
      var columns = [];
      for (var j = 0; j < n; j++) {
        columns.push(".");
      }
      chessboard.push(columns);
    }

    //递归函数,逐行对皇后进行放置
    function dropQueen(currentRow) {
      var row = currentRow || 0;

      //当行数大于n时,说明已经放完了皇后,方法成功
      if (row >= n) {
        //保存结果
        result.push(snapshot(chessboard));
        return;
      }

      //对每一列进行递归判断,
      for (var column = 0; column < n; column++) {
        //如果当前列已经在之前的行中放置了皇后,则不可放置,直接跳过
        if (columnCache.includes(column)) {
          continue;
        }
        //第一行直接完成
        if (row === 0) {
          chessboard[row][column] = "Q";
          columnCache.push(column);
          dropQueen(row + 1);
          //递归完成,重置棋盘,将当前棋子去除
          chessboard[row][column] = ".";
          //列缓存出栈
          columnCache.pop();
        } else {
          if (checkPosition(row, column)) {
            chessboard[row][column] = "Q";
            columnCache.push(column);
            dropQueen(row + 1);
            chessboard[row][column] = ".";
            columnCache.pop();
          }
        }
      }
    }

    //检查在当前行/列上放置皇后是否合法
    function checkPosition(row, column) {
      //检查同一列上是否有皇后
      for (var i = 0; i < row; i++) {
        if (chessboard[i][column] === "Q") {
          return false;
        }
      }
      //检查左对角线上是否有皇后
      for (var j = column - 1; j >= 0; j--) {
        var curRow = row - (column - j);
        if (curRow < 0) {
          break;
        }
        if (chessboard[curRow][j] === "Q") {
          return false;
        }
      }
      //检查右对角线上是否有皇后
      for (var k = column + 1; k <= n; k++) {
        var curRow1 = row - (k - column);
        if (row === 2 && column === 1) {}
        if (curRow1 < 0) {
          break;
        }
        if (chessboard[curRow1][k] === "Q") {
          return false;
        }
      }
      //由于是从上想先放置,不需要判断左下与右上的情况
      return true;
    }

    //对得出的结果进行快照,保存
    function snapshot(source) {
      var target = [];
      for (var u = 0; u < source.length; u++) {
        target.push(source[u].join(''));
      }
      return target;
    }

    //开始进行八皇后问题
    dropQueen();
    return result;
  };

  var result = solveNQueens(4);
  console.log("解法 ==>", result);


};


totalNQueens()
/**
 * [
   [".Q..",  // 解法 1
    "...Q",
    "Q...",
    "..Q."],
  
   ["..Q.",  // 解法 2
    "Q...",
    "...Q",
    ".Q.."]
  ]
 * 
 */