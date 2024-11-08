/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  if (!nums.length || nums.length < 2) return [];
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return result;
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        while (nums[right] === nums[right - 1]) right--;
        right--;
      } else if (sum < 0) {
        while (nums[left] === nums[left + 1]) left++;
        left++;
      }
    }
  }

  return result;
};

var threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res;
    if (nums[i] === nums[i - 1]) continue;
    const target = -sorted[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = sorted[left] + sorted[right];
      if (sum === target) {
        res.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (sorted[left] === sorted[left - 1]) left++;
        while (sorted[right] === sorted[right + 1]) right--;
      } else if (sum < target) {
        left++;
        while (sorted[left] === sorted[left - 1]) left++;
      } else {
        right--;
        while (sorted[right] === sorted[right + 1]) right--;
      }
    }
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
