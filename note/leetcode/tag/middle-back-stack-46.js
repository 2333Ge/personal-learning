/**
 * 回溯
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

const permute = (nums = []) => {
  const res = [];
  const indexMap = {};
  const backStack = (curNums = []) => {
    if (curNums.length === nums.length) {
      res.push([...curNums]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!indexMap[i]) {
        curNums.push(nums[i]);
        indexMap[i] = true;
        backStack(curNums);
        delete indexMap[i];
        curNums.pop();
      }
    }
  };
  backStack([]);
  return res;
};

console.log("====>", permuteUnique([1, 2, 3]));
console.log("====>", permuteUnique([1, 0]));
console.log("====>", permuteUnique([1]));
