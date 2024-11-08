/*
 * @lc app=leetcode.cn id=120 lang=javascript
 * @lcpr version=30204
 *
 * [120] 三角形最小路径和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal1 = function (triangle) {
  const thisLevel = [triangle[0][0]];
  let preLevel = [...thisLevel];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const cur = triangle[i][j];
      if (j === 0) {
        thisLevel[j] = preLevel[j] + cur;
      } else if (j === triangle[i].length - 1) {
        thisLevel[j] = preLevel[j - 1] + cur;
      } else {
        thisLevel[j] = Math.min(preLevel[j - 1], preLevel[j]) + cur;
      }
    }
    preLevel = [...thisLevel];
  }
  return Math.min(...thisLevel);
};

var minimumTotal2 = function (triangle) {
  const dp = [];
  // 超时
  const dfs = (i, j) => {
    if (i === triangle.length - 1) return triangle[i][j];
    if (!dp[i]) dp[i] = [];
    if (dp[i][j] !== undefined) return dp[i][j];
    dp[i][j] = Math.min(dfs(i + 1, j), dfs(i + 1, j + 1)) + triangle[i][j];
    return dp[i][j];
  };
  return dfs(0, 0);
};

var minimumTotal = function (triangle) {
  if (!triangle[0]?.length) return 0;
  const dp = [[triangle[0][0]]];
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = [triangle[i][0] + dp[i - 1][0]];
    dp[i][i] = triangle[i][i] + dp[i - 1][i - 1];
  }

  for (let i = 2; i < triangle.length; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
  }

  return Math.min(...dp[dp.length - 1]);
};
// @lc code=end

/*
// @lcpr case=start
// [[2],[3,4],[6,5,7],[4,1,8,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[-10]]\n
// @lcpr case=end

 */
