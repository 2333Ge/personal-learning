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
var longestPalindrome = function (s) {
  if (!s?.length) return 0;

  let maxLen = 0;
  let start = 0;

  const expandFromCenter = (l, r) => {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      const len = r - l + 1;
      if (len > maxLen) {
        maxLen = len;
        start = l;
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromCenter(i, i);
    expandFromCenter(i, i + 1);
  }

  return s.substring(start, start + maxLen);
};

/**
 * ai
 * @param {*} s
 * @returns
 */
var longestPalindrome1 = function (s) {
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
