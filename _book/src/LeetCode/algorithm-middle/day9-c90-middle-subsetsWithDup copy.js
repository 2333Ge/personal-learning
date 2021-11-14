/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets-ii
 */
/**
 * 初版没想明白
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup1 = function (a) {
  if (!a || a.length === 0) return [];
  const nums = a.sort((n1, n2) => n1 - n2);
  const result = [[]];
  const temp = [];
  const used = [];
  const dfs = (lastIndex) => {
    for (let i = lastIndex; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      temp.push(nums[i]);
      result.push(temp.slice());
      used[i] = true;
      dfs(i + 1);
      used[i] = false;
      temp.pop();
    }
  };
  dfs(0);

  return result;
};

console.log(subsetsWithDup([1, 2, 2]));

console.log(subsetsWithDup([4, 4, 4, 1, 4]));
