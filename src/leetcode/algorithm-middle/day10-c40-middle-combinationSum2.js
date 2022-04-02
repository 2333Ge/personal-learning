/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

注意：解集不能包含重复的组合。 

 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
 

提示:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-ii
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const sortCombinationSum = candidates.sort((a, b) => a - b);
  const result = [];
  const temp = [];
  const dfs = (startIndex, sum = 0) => {
    if (sum === target) {
      result.push(temp.slice());
      return;
    }
    // 注意这里没声明let i 是变量提升导致答案不对
    for (let i = startIndex; i < sortCombinationSum.length; i++) {
      if (
        sortCombinationSum[i] === sortCombinationSum[i - 1] &&
        i !== startIndex
      )
        continue;
      const newSum = sum + sortCombinationSum[i];
      if (newSum > target) return;
      temp.push(sortCombinationSum[i]);
      dfs(i + 1, newSum);
      temp.pop();
    }
  };
  dfs(0);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
