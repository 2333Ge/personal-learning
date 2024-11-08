/*
 * @lc app=leetcode.cn id=35 lang=javascript
 * @lcpr version=30204
 *
 * [35] 搜索插入位置
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};
var searchInsert1 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.round((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
// @lc code=end
console.log("searchInsert====>", searchInsert([1, 3, 5], 1));
/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = searchInsert;
// @lcpr-after-debug-end
