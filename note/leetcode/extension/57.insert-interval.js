/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * @lcpr version=30204
 *
 * [57] 插入区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert1 = function (intervals, newInterval) {
  let _newInterval = newInterval;
  if (intervals.length === 0) return [_newInterval];
  let i = 0;
  while (i < intervals.length) {
    const [start, end] = _newInterval;
    const [curStart, curEnd] = intervals[i];
    if (start <= curEnd) {
      // 无交集，插入前一位
      if (end < curStart) {
        intervals.splice(i, 0, _newInterval);
        return intervals;
      }
      // 包含，直接返回
      if (end <= curEnd && start >= curStart) {
        return intervals;
      }
      // 有交集，构造新区间判断
      _newInterval = [Math.min(start, curStart), Math.max(end, curEnd)];
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }
  return [...intervals, _newInterval];
};

var insert = function (intervals = [], newInterval = []) {
  const result = [...intervals];
  let _newInterval = newInterval;
  let i = 0;
  while (i < result.length) {
    const [curStart, curEnd] = result[i];
    const [judgeStart, judgeEnd] = _newInterval;
    if (curEnd < judgeStart) {
      // 小于，继续找
      i++;
      continue;
    }
    if (curStart > judgeEnd) {
      // 无交集,前插
      result.splice(i, 0, _newInterval);
      return result;
    }
    _newInterval = [Math.min(curStart, judgeStart), Math.max(curEnd, judgeEnd)];
    result.splice(i, 1);
  }

  return [...result, _newInterval];
};
// @lc code=end
//
console.log("insert====>", insert([[1, 5]], [5, 7]));
/*
// @lcpr case=start
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = insert;
// @lcpr-after-debug-end
