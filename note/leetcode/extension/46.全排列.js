/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute1 = function (nums) {
  const result = [];
  const selected = {};
  const backStack = (list = []) => {
    for (let i = 0; i < nums.length; i++) {
      if (!selected[i]) {
        const newList = [...list, nums[i]];
        if (newList.length === nums.length) {
          result.push(newList);
          return;
        }
        selected[i] = true;
        backStack(newList);
        selected[i] = false;
      }
    }
  };
  backStack();
  return result;
};

var permute = function (nums) {
  const result = [];
  const selected = new Set();
  const backTrack = (cur = []) => {
    if (cur.length === nums.length) {
      result.push(cur);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (selected.has(i)) continue;
      selected.add(i);
      backTrack([...cur, nums[i]]);
      selected.delete(i);
    }
  };
  backTrack();
  return result;
};
// @lc code=end

console.log("3====>", permute([1, 2, 3]));
console.log("2====>", permute([1, 2]));
console.log("1====>", permute([1]));

// @lcpr-after-debug-begin
module.exports = permute;
// @lcpr-after-debug-end
