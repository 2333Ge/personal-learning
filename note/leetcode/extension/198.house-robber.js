/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30204
 *
 * [198] 打家劫舍
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] || 0, dp[i - 3] || 0) + nums[i];
  }
  return Math.max(dp[nums.length - 1] || 0, dp[nums.length - 2] || 0);
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */
