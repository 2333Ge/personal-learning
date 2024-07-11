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
// var maxSubArray = function (nums) {
//   const dpIndex = [];
//   let maxStartIndex = 0;
//   let maxEndIndex = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if ((nums[dpIndex[i - 1]] || 0) + nums[i] > nums[i]) {
//       dpIndex[i] = dpIndex[i - 1];
//       maxStartIndex = dpIndex[i - 1];
//       maxEndIndex = i;
//     } else {
//       dpIndex[i] = i;
//       maxStartIndex = i;
//       maxEndIndex = i;
//     }
//   }
//   return nums.slice(maxStartIndex, maxEndIndex + 1)
// };

var maxSubArray = function (nums) {
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
