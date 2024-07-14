/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30204
 *
 * [59] 螺旋矩阵 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let cur = 1;
  let res = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res[top][i] = cur;
      cur++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res[i][right] = cur;
      cur++;
    }
    right--;
    if (left <= right && top <= bottom) {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = cur;
        cur++;
      }
      bottom--;
      for (let i = bottom; i >= top; i--) {
        res[i][left] = cur;
        cur++;
      }
      left++;
    }
  }
  return res;
};
// @lc code=end
console.log("generateMatrix(3)====>", generateMatrix(3));
/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
