/*
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=30204
 *
 * [33] 搜索旋转排序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("l,r====>", left, right);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      // 左半部分有序
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// [4,5,6,7,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = search;
// @lcpr-after-debug-end
