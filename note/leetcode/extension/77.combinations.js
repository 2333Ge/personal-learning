/*
 * @lc app=leetcode.cn id=77 lang=javascript
 * @lcpr version=30204
 *
 * [77] 组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine1 = function (n, k) {
  let result = [];
  let have = {};
  const dfs = (min, arr) => {
    if (arr.length === k) {
      result.push(arr);
      return;
    }
    for (let i = min; i <= n; i++) {
      if (!have[i]) {
        have[i] = true;
        dfs(i + 1, [...arr, i]);
        have[i] = false;
      }
    }
  };
  dfs(1, []);
  return result;
};
// 优化
var combine2 = function (n, k) {
  let result = [];
  const path = [];
  const dfs = (min) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = min; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  };
  dfs(1);
  return result;
};

// + 减枝

var combine = function (n, k) {
  let result = [];
  const path = [];
  const dfs = (min) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = min; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  };
  dfs(1);
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */
