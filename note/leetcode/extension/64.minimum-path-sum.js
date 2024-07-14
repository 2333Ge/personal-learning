/*
 * @lc app=leetcode.cn id=64 lang=javascript
 * @lcpr version=30204
 *
 * [64] 最小路径和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = [];
  for (let i = 0; i < grid.length; i++) {
    dp[i] = [grid[i][0] + (dp[i - 1]?.[0] || 0)];
  }
  for (let i = 1; i < grid[0].length; i++) {
    dp[0][i] = grid[0][i] + (dp[0][i - 1] || 0);
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};
// @lc code=end

/*
// @lcpr case=start
// [[1,3,1],[1,5,1],[4,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */
