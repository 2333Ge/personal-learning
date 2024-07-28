/*
 * @lc app=leetcode.cn id=172 lang=javascript
 * @lcpr version=30204
 *
 * [172] 阶乘后的零
  // 计算5的数量，5的数量就是0的数量，偶数很多，不用考虑
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const get5 = (n) => {
  let count = 0;
  while (n % 5 === 0) {
    count++;
    n = n / 5;
  }
  return count;
};
var trailingZeroes = function (n) {
  if (n < 4) return 0;
  let count = 0;
  for (let i = 5; i <= n; i += 5) {
    if (i % 5 === 0) {
      count += get5(i);
    }
  }
  return count;
};
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */
