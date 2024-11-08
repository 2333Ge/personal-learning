/*
 * @lc app=leetcode.cn id=221 lang=javascript
 * @lcpr version=30204
 *
 * [221] 最大正方形
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare1 = function (matrix) {
  if (!matrix.length) return 0;
  const dp = [];
  let maxSize = 0;
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        dp[i][j] = 1;
        const previousSize = dp[i - 1]?.[j - 1] || 0;
        for (let k = 1; k <= previousSize; k++) {
          if (matrix[i - k][j] == 1 && matrix[i][j - k] == 1) {
            dp[i][j] += 1;
          } else {
            break;
          }
        }
        maxSize = Math.max(maxSize, dp[i][j]);
      }
    }
  }
  return maxSize * maxSize;
};
var maximalSquare = function (matrix) {
  if (!matrix.length) return 0;
  const dp = []; // 以i,j为右下角的正方形
  let maxLength = 0;

  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] =
          Math.min(
            dp[i - 1]?.[j - 1] || 0,
            dp[i]?.[j - 1] || 0,
            dp[i - 1]?.[j] || 0
          ) + 1;
        maxLength = Math.max(dp[i][j], maxLength);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return maxLength * maxLength;
};
// @lc code=end

/*
// @lcpr case=start
// [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["0","1"],["1","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["0"]]\n
// @lcpr case=end

 */
