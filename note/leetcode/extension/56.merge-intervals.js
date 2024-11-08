/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30204
 *
 * [56] 合并区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * [1,3] [2,6] [5,10] 算重合区间否？算  
 * 原区间是否排序？
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [sortedIntervals[0]];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const [curA, curB] = sortedIntervals[i];
    const [lastA, lastB] = result[result.length - 1];
    if (curA <= lastB) {
      result[result.length - 1] = [lastA, Math.max(lastB, curB)];
    } else {
      result.push(sortedIntervals[i]);
    }
  }
  return result;
};

// @lc code=end

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */
