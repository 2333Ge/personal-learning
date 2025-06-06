/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30204
 *
 * [39] 组合总和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum1 = function (c, target) {
  let res = [];
  let path = [];

  const candidates = c.sort((a, b) => a - b);
  const backTrack = (curTarget, start = 0) => {
    if (curTarget === 0) {
      res.push([...path]);
      return;
    }
    for (
      let i = start;
      i < candidates.length && curTarget >= candidates[i];
      i++
    ) {
      if (candidates[i] > curTarget) break;
      path.push(candidates[i]);
      backTrack(curTarget - candidates[i], i);
      path.pop();
    }
  };
  backTrack(target);
  return res;
};

var combinationSum = function (c, target) {

};
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = combinationSum;
// @lcpr-after-debug-end
