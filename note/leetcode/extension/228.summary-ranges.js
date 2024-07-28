/*
 * @lc app=leetcode.cn id=228 lang=javascript
 * @lcpr version=30204
 *
 * [228] 汇总区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 写复杂了
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges1 = function (nums) {
  if (nums.length === 0) return [];
  const res = [];
  let start;
  for (let i = 0; i < nums.length; i++) {
    if (start === undefined) {
      start = nums[i];
      continue;
    }
    if (nums[i] === nums[i - 1] + 1) {
      continue;
    }
    if (start === nums[i - 1]) {
      res.push(`${start}`);
    } else {
      res.push(`${start}->${nums[i - 1]}`);
    }
    start = nums[i];
  }
  if (start === nums[nums.length - 1]) {
    res.push(`${start}`);
  } else {
    res.push(`${start}->${nums[nums.length - 1]}`);
  }
  return res;
};

var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  const res = [];
  let start = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      // 只判断需要处理的情况
      if (nums[i - 1] === start) {
        res.push(`${start}`);
      } else {
        res.push(`${start}->${nums[i - 1]}`);
      }
      start = nums[i];
    }
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [0,1,2,4,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,4,6,8,9]\n
// @lcpr case=end

 */
