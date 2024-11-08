/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30204
 *
 * [39] 组合总和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 有重复结果
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumX = function (candidates, target) {
  const dp = [];
  for (let i = 1; i <= target; i++) {
    dp[i] = [];
    for (base of candidates) {
      if (i - base === 0) {
        dp[i].push([base]);
      } else if (dp[i - base]?.length) {
        dp[i].push(...dp[i - base].map((arr) => [...arr, base]));
      }
    }
  }
  return dp[target] || [];
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = combinationSum;
// @lcpr-after-debug-end
