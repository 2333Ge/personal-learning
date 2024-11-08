/*
 * @lc app=leetcode.cn id=74 lang=javascript
 * @lcpr version=30204
 *
 * [74] 搜索二维矩阵
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    const mid = Math.round((left + right) / 2);
    if (matrix[mid][0] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  const arr = matrix[left];
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13\n
// @lcpr case=end
📢
// [[1,3]]\n1\n
// [[1,3]]\n3\n
📢
 */
