/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30122
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 待提交
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexMap = {};
  for (let index = 0; index < nums.length; index++) {
    const cur = nums[index];
    if (indexMap[target - cur]) {
      return [indexMap[cur], indexMap[target - cur]];
    }
    indexMap[cur] = index;
  }
  return [];
};
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
