/*
 * @lc app=leetcode.cn id=45 lang=javascript
 * @lcpr version=30204
 *
 * [45] 跳跃游戏 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function (nums) {
  const dp = [0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      dp[i + j] = Math.min(dp[i + j] ?? Infinity, 1 + dp[i]);
    }
  }
  return dp[nums.length - 1];
};
var jump = function (nums) {
  let maxRight = 0;
  let step = 0;
  let curEnd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxRight = Math.max(maxRight, i + nums[i]);
    if (i === curEnd) {
      step++;
      curEnd = maxRight;
    }
  }
  return step;
};

// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */
