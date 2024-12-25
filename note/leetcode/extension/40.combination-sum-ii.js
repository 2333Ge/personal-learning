/*
 * @lc app=leetcode.cn id=40 lang=javascript
 * @lcpr version=30204
 *
 * [40] 组合总和 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  let sorted = candidates.sort((a, b) => a - b);
  let path = [];
  const backtrack = (curTarget, start = 0) => {
    if (curTarget === 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < sorted.length; i++) {
      if (curTarget < sorted[i]) {
        break;
      }
      path.push(sorted[i]);
      backtrack(curTarget - sorted[i], i + 1);
      path.pop();
      while (sorted[i] === sorted[i + 1]) {
        i++;
      }
    }
  };

  backtrack(target);

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

 */
