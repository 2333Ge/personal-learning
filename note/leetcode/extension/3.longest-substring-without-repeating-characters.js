/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30119
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charMap = {};
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < s.length) {
    const char = s[right];
    if (charMap[char] === undefined) {
      charMap[char] = right;
      right++;
      res = Math.max(right - left, res);
    } else {
      left = charMap[char] + 1;
      delete charMap[char];
    }
  }
  return res;
};

// abba

// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = lengthOfLongestSubstring;
// @lcpr-after-debug-end
