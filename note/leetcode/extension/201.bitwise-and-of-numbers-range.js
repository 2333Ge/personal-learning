/*
 * @lc app=leetcode.cn id=201 lang=javascript
 * @lcpr version=30204
 *
 * [201] 数字范围按位与
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let l = left;
  let r = right;
  while (l < r) {
    // 逐步去掉最右边的1
    r = r & (r - 1);
  }
  return r;
};
// @lc code=end

/*
// @lcpr case=start
// 5\n7\n
// @lcpr case=end

// @lcpr case=start
// 0\n0\n
// @lcpr case=end

// @lcpr case=start
// 1\n2147483647\n
// @lcpr case=end

 */
