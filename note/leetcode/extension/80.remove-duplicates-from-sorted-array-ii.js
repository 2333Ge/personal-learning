/*
 * @lc app=leetcode.cn id=80 lang=javascript
 * @lcpr version=30204
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  if (nums.length <= 2) return nums.length;
  let ppIndex = 0;
  for (let i = 2; i < nums.length; ) {
    if (nums[i] === nums[ppIndex]) {
      nums.splice(i, 1);
    } else {
      i++;
      ppIndex++;
    }
  }
  return nums.length;
};

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let l = 2,
    r = 2;
  while (r < nums.length) {
    if (nums[r] !== nums[l - 1] || nums[l - 1] !== nums[l - 2]) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  return l;
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,1,2,3,3]\n
// @lcpr case=end

 */
