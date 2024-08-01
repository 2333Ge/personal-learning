/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30204
 *
 * [238] 除自身以外数组的乘积
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const before = [];
  const after = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // 注意乘机0的情况
    before[i] = (before[i - 1] ?? 1) * nums[i];
    after[nums.length - i - 1] =
      (after[nums.length - i] ?? 1) * nums[nums.length - i - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = (before[i - 1] ?? 1) * (after[i + 1] ?? 1);
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = productExceptSelf;
// @lcpr-after-debug-end
