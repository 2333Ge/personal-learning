/*
 * @lc app=leetcode.cn id=22 lang=javascript
回溯
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 失败，失败case n=4 (())(())
  let dpPreviousMap = { "()": true };
  let dpCurMap = { "()": true };
  for (let i = 2; i <= n; i++) {
    dpCurMap = {};
    for (let str in dpPreviousMap) {
      dpCurMap[`()${str}`] = true;
      dpCurMap[`(${str})`] = true;
      dpCurMap[`${str}()`] = true;
    }
    dpPreviousMap = dpCurMap;
  }
  return Object.keys(dpCurMap);
};
// @lc code=end

console.log("1====>", generateParenthesis(1));
console.log("2====>", generateParenthesis(2));
console.log("3====>", generateParenthesis(3));
console.log("4 14====>", generateParenthesis(4), generateParenthesis(4).length);

