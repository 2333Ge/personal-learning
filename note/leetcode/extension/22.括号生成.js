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
var generateParenthesisX = function (n) {
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

var generateParenthesis1 = function (n) {
  const res = [];
  const backTrack = (str, left, right) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (left < n) {
      backTrack(str + "(", left + 1, right);
    }
    if (right < left) {
      backTrack(str + ")", left, right + 1);
    }
  };
  backTrack("", 0, 0);
  return res;
};

var generateParenthesis = function (n) {
  const res = [];

  const backTrace = (cur = "", left = 0, right = 0) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      backTrace(cur + "(", left + 1, right);
    }
    if (right < left) {
      backTrace(cur + ")", left, right + 1);
    }
  };

  backTrace();

  return res;
};

// @lc code=end

console.log("1====>", generateParenthesis(1));
console.log("2====>", generateParenthesis(2));
console.log("3====>", generateParenthesis(3));
console.log("4 14====>", generateParenthesis(4), generateParenthesis(4).length);
