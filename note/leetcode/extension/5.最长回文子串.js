/*
 * @lc app=leetcode.cn id=5 lang=javascript

动态规划
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function (s) {
  // 硬解，没用动态规划
  if (!s?.length) return "";

  const palindromeSpace = (i, j) => {
    if (i < 0 || j >= s.length) return 0;
    if (s[i] != s[j]) return 0;
    return 1 + palindromeSpace(i - 1, j + 1);
  };
  let result = s[0];
  let space = 0;
  for (let i = 0; i < s.length - 1; i++) {
    space = palindromeSpace(i - 1, i + 1);
    if (1 + space * 2 > result.length) {
      result = s.substring(i - space, i + space + 1);
    }
    space = palindromeSpace(i, i + 1);
    if (space * 2 > result.length) {
      result = s.substring(i - space + 1, i + space + 1);
    }
  }

  return result;
};
/**
 * ai
 * @param {*} s
 * @returns
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const len = right - left + 1;
      if (len > maxLen) {
        start = left;
        maxLen = len;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 奇数长度
    expandAroundCenter(i, i + 1); // 偶数长度
  }

  return s.substring(start, start + maxLen);
};
// @lc code=end
