/*
 * @lc app=leetcode.cn id=55 lang=javascript
 * @lcpr version=30204
 *
 * [55] 跳跃游戏
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxRight = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (i > maxRight) {
      return false;
    }
    maxRight = Math.max(i + nums[i], maxRight);
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = canJump;
// @lcpr-after-debug-end