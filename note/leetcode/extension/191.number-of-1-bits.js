/*
 * @lc app=leetcode.cn id=191 lang=javascript
 * @lcpr version=30204
 *
 * [191] 位1的个数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight1 = function (n) {
  let count = 0;
  let cur = n;
  while (cur) {
    if (cur % 2 === 1) count++;
    cur = Math.floor(cur / 2);
  }
  return count;
};

var hammingWeight = function (n) {
  let count = 0;
  let cur = n;
  while (cur) {
    if (cur & 1) count++;
    cur >>= 1;
  }
  return count;
};
// @lc code=end

/*
// @lcpr case=start
// 11\n
// @lcpr case=end

// @lcpr case=start
// 128\n
// @lcpr case=end

// @lcpr case=start
// 2147483645\n
// @lcpr case=end

 */
