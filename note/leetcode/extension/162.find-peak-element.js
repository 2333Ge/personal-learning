/*
 * @lc app=leetcode.cn id=162 lang=javascript
 * @lcpr version=30204
 *
 * [162] 寻找峰值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement1 = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

var findPeakElement2 = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    // 注意比较对象
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1,3,5,6,4]\n
// @lcpr case=end

 */
