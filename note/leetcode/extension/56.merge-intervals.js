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
var merge1 = function (intervals) {
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

var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  const sorted = intervals.sort(([a], [b]) => a - b);
  let i = 1;
  const res = [sorted[0]];
  while (i < intervals.length) {
    const [lastA, lastB] = res[res.length - 1];
    const [curA, curB] = sorted[i];
    if (curA > lastB) {
      res.push(sorted[i]);
    } else {
      res[res.length - 1] = [lastA, Math.max(lastB, curB)];
    }
    i++;
  }

  return res;
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
