/*
 * @lc app=leetcode.cn id=63 lang=javascript
 * @lcpr version=30204
 *
 * [63] 不同路径 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const dp = [];
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp[i] = [];
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      // 可以先初始化边界
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      } else {
        if (i === 0 && j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = (dp[i - 1]?.[j] || 0) + (dp[i]?.[j - 1] || 0);
        }
      }
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
// @lc code=end

/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[0,0]]\n
// @lcpr case=end

 */
