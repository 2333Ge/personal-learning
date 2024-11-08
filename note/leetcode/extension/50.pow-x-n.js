/*
 * @lc app=leetcode.cn id=50 lang=javascript
 * @lcpr version=30204
 *
 * [50] Pow(x, n)
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow1 = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === -1) return 1 / x;
  // return myPow(x, n > 0 ? n - 1 : n + 1) * (n > 0 ? x : 1 / x);
  const halfN = myPow(x, Math.trunc(n / 2));
  const extra = n > 0 ? x : 1 / x;
  return halfN * halfN * (n % 2 === 0 ? 1 : extra);
};

var myPow2 = function (x, n) {
  if (n === 0) return 1;
  let newX = x;
  let newN = n;
  if (n < 0) {
    newX = 1 / x;
    newN = -n;
  }
  return newN % 2 === 0
    ? myPow(newX * newX, newN / 2)
    : newX * myPow(newX * newX, Math.floor(newN / 2));
};

var myPow = function (x, n) {
  if (n === 0) return 1;
  const _x = n < 0 ? 1 / x : x;
  const half = myPow(_x, Math.floor(Math.abs(n) / 2));
  return half * half * (Math.abs(n) % 2 === 1 ? _x : 1); // 注意负数取余还是负数
};
// @lc code=end

/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */
