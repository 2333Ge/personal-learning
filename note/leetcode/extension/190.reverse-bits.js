/*
 * @lc app=leetcode.cn id=190 lang=javascript
 * @lcpr version=30204
 *
 * [190] 颠倒二进制位
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0;
  let cur = n;
  for (let i = 0; i < 32; i++) {
    if (cur & 1) {
      res |= 1 << (31 - i);
    }
    cur >>>= 1; /// >>>无符号右移?
  }
  return res>>>0;
};
// @lc code=end

/*
// @lcpr case=start
// 00000010100101000001111010011100\n
// @lcpr case=end

// @lcpr case=start
// 11111111111111111111111111111101\n
// @lcpr case=end

 */
