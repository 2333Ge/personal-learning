/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30204
 *
 * [209] 长度最小的子数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (!nums?.length) return 0;
  let left = 0,
    right = 0,
    sum = 0,
    resLength = Infinity;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      resLength = Math.min(resLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return resLength === Infinity ? 0 : resLength;
};
// @lc code=end

/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = minSubArrayLen;
// @lcpr-after-debug-end
