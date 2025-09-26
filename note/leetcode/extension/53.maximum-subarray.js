/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30204
 *
 * [53] 最大子数组和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray1 = function (nums) {
  const dp = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return max;
};

var maxSubArray2 = function (nums) {
  const dp = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = nums[i] + dp[i - 1];
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

var maxSubArray = function (nums) {
  let res = nums[0];
  let curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    res = Math.max(res, curSum);
  }
  return res;
};

// @lc code=end

/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */
