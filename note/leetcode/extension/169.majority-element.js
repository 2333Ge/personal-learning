/*
 * @lc app=leetcode.cn id=169 lang=javascript
 * @lcpr version=30204
 *
 * [169] 多数元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  for (const [num, count] of countMap) {
    if (count > nums.length / 2) return num;
  }
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */
