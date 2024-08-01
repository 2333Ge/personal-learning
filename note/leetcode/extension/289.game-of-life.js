/*
 * @lc app=leetcode.cn id=289 lang=javascript
 * @lcpr version=30204
 *
 * [289] 生命游戏
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const result = [];

  const getLiveCount = (i, j) => {
    let count = 0;
    for (let newI = i - 1; newI <= i + 1; newI++) {
      for (let newJ = j - 1; newJ <= j + 1; newJ++) {
        if (newI === i && newJ === j) {
          continue;
        }
        count += board[newI]?.[newJ] || 0;
      }
    }
    return count;
  };

  for (let i = 0; i < board.length; i++) {
    result[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      const liveCount = getLiveCount(i, j);
      if (liveCount === 3) {
        result[i][j] = 1;
      } else if (liveCount === 2 && board[i][j] === 1) {
        result[i][j] = 1;
      } else {
        result[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = result[i][j];
    }
  }
};
// @lc code=end

/*
// @lcpr case=start
// [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,0]]\n
// @lcpr case=end

 */
