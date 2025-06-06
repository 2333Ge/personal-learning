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
  const result = [];

  const backtrack = (cur = "", left = 0) => {
    if (cur.length === n * 2) {
      result.push(cur);
      return;
    }
    if (left < n) {
      backtrack(cur + "(", left + 1);
    }
    if (cur.length - left < left) {
      backtrack(cur + ")", left);
    }
  };

  backtrack();

  return result;
};

// @lc code=end

console.log("1====>", generateParenthesis(1));
console.log("2====>", generateParenthesis(2));
console.log("3====>", generateParenthesis(3));
console.log("4 14====>", generateParenthesis(4), generateParenthesis(4).length);
