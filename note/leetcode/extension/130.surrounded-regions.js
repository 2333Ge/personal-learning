/*
 * @lc app=leetcode.cn id=130 lang=javascript
 * @lcpr version=30204
 *
 * [130] 被围绕的区域
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (i, j) => {
    if (board[i]?.[j] === "O") {
      board[i][j] = ".";
      dfs(i - 1, j);
      dfs(i, j - 1);
      dfs(i + 1, j);
      dfs(i, j + 1);
    }
  };
  for (let i = 0; i < board.length; i++) {
    dfs(i, 0);
    dfs(i, board[0].length - 1);
  }

  for (let j = 1; j < board[0].length - 1; j++) {
    dfs(0, j);
    dfs(board.length - 1, j);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
      if (board[i][j] === ".") {
        board[i][j] = "O";
      }
    }
  }
};
// @lc code=end

/*
// @lcpr case=start
// [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]\n
// @lcpr case=end

// @lcpr case=start
// [["X"]]\n
// @lcpr case=end

 */
