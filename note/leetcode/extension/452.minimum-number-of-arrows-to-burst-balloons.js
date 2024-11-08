/*
 * @lc app=leetcode.cn id=452 lang=javascript
 * @lcpr version=30204
 *
 * [452] 用最少数量的箭引爆气球
 * 【重要】
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;
  let result = 1;
  points.sort((a, b) => a[1] - b[1]);
  let pre = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > pre[1]) {
      result++;
      pre = points[i];
    }
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [[10,16],[2,8],[1,6],[7,12]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,4],[5,6],[7,8]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[2,3],[3,4],[4,5]]\n
// @lcpr case=end

 */
