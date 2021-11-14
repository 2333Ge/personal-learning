/**

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (a) {
  const nums = a.sort((a, b) => a - b);
  const result = [];
  const temp = [];
  const used = [];
  const dfs = (previousIndex = -1, depth = 0) => {
    if (depth >= nums.length) {
      result.push(temp.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (
        i === previousIndex ||
        used[i] ||
        (used[i - 1] && nums[i] === nums[i - 1])
      ) {
        continue;
      }
      temp.push(nums[i]);
      used[i] = true;
      dfs(i, depth + 1);
      used[i] = false;
      temp.pop();
    }
  };
  dfs(-1);
  return result;
};
console.log(permuteUnique([1, 2, 1]));

console.log(permuteUnique([1, 2, 3]));
