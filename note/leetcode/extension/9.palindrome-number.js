/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30204
 *
 * [9] 回文数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let reverseNum = 0;
  let cur = x;
  while (cur) {
    reverseNum = reverseNum * 10 + (cur % 10);
    cur = Math.floor(cur / 10);
  }
  return reverseNum === x;
};
// @lc code=end

/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */
