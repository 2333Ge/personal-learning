/*
 * @lc app=leetcode.cn id=435 lang=javascript
 * @lcpr version=30204
 *
 * [435] 无重叠区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const sorted = intervals.sort((a, b) => a[1] - b[1]);
  let valid = 1;
  let pre = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const cur = sorted[i];
    if (pre[1] <= cur[0]) {
      valid++;
      pre = sorted[i];
    }
  }

  return intervals.length - valid;
};

// @lc code=end

/*
// @lcpr case=start
// [[1,2],[2,3],[3,4],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// [ [1,2], [1,2], [1,2] ]\n
// @lcpr case=end

// @lcpr case=start
// [ [1,2], [2,3] ]\n
// @lcpr case=end

 */
