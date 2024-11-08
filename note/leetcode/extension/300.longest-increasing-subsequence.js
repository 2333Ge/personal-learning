/*
 * @lc app=leetcode.cn id=300 lang=javascript
 * @lcpr version=30204
 *
 * [300] 最长递增子序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums?.length) return 0;
  let res = 1;
  const dp = [1];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [10,9,2,5,3,7,101,18]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */
