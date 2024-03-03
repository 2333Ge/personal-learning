/**
 * 回溯
 * 全排列2
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
 */

const permuteUnique = (nums = []) => {
  const result = [];
  const indexMap = {};
  const backStack = (curNums = []) => {
    if (curNums.length === nums.length) {
      result.push([...curNums]);
    }
    const thisLevelValueMap = {};
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (!indexMap[i] && !thisLevelValueMap[element]) {
        curNums.push(element);
        thisLevelValueMap[element] = true;
        indexMap[i] = true;
        backStack(curNums);
        delete indexMap[i];
        curNums.pop();
      }
    }
  };
  backStack([]);
  return result;
};

console.log("[1,1,2]====>", permuteUnique([1, 1, 2]));
console.log("[1,2,3]====>", permuteUnique([1, 2, 3]));
