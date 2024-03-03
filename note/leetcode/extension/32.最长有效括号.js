/*
 * @lc app=leetcode.cn id=32 lang=javascript
动态规划
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 方法1，用栈来判断括号的有效性
  if (!s?.length || s.length < 2) return 0;
  const stack = [];
  // dp[i] 表示 以 s[i]为 结尾的有效子串的长度
  const dp = [];
  let result = 0;
  let lastIndex = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i] = 0;
    if (s[i] === "(") {
      stack.push(i);
    } else {
      lastIndex = stack.pop();
      if (s[lastIndex] === "(") {
        dp[i] = i - lastIndex + 1 + (dp[lastIndex - 1] || 0);
        result = Math.max(result, dp[i]);
      }
    }
  }
  return result;
};

// @lc code=end

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses2 = function (s) {
  // 方法2，纯动态规划
  if (!s?.length || s.length < 2) return 0;
  // dp[i] 表示 以 s[i]为 结尾的有效子串的长度
  const dp = Array.from({ length: s.length }).fill(0);
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1 - dp[i - 1]] === "(") {
      dp[i] = dp[i - 1] + 2 + (dp[i - 2 - dp[i - 1]] || 0);
      max = Math.max(dp[i], max);
    }
  }
  return max;
};

var longestValidParentheses2 = function (s) {
  // 方法2，纯动态规划
  if (!s?.length || s.length < 2) return 0;
  // dp[i] 表示 以 s[i]为 结尾的有效子串的长度
  const dp = Array.from({ length: s.length }).fill(0);
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1 - dp[i - 1]] === "(") {
      dp[i] = dp[i - 1] + 2 + (dp[i - 2 - dp[i - 1]] || 0);
      max = Math.max(dp[i], max);
    }
  }
  return max;
};

/**
 * 用栈再做一遍
 * 2024年2月28日
 */

var longestValidParentheses3 = function (s) {
  if (!s?.length || s.length < 2) return 0;
  const stack = [];
  const dp = Array.from({ length: s.length }).fill(0);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (stack.length) {
      const lastIndex = stack.pop();
      dp[i] = i - lastIndex + 1 + (dp[lastIndex - 1] || 0);
      if (dp[i] > result) {
        result = dp[i];
      }
    }
  }
  return result;
};

console.log("2====>", longestValidParentheses3("(()"));
console.log("4====>", longestValidParentheses3(")()()))"));
console.log("0====>", longestValidParentheses3(""));
