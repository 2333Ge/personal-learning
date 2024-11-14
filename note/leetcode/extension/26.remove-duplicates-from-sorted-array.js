/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30204
 *
 * [26] 删除有序数组中的重复项
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  if (nums.length === 0) return 0;
  let lastIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[lastIndex]) {
      lastIndex++;
      nums[lastIndex] = nums[i];
    }
  }
  return lastIndex + 1;
};

var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }
  return left + 1;
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
