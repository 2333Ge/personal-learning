/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=30204
 *
 * [69] x 的平方根
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;
  let left = 1,
    right = x;
  while (left < right) {
    const mid = Math.round((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid;
    } else {
      return mid;
    }
  }
  return left;
};
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = mySqrt;
// @lcpr-after-debug-end
