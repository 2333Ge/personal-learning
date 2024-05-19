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
 * 待看官方题解
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s?.length || s.length === 1) return s?.length || 0;
  const curCharMap = {};
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (right < s.length) {
    const char = s[right];
    if (!curCharMap[char]) {
      right++;
      curCharMap[char] = true;
    } else {
      maxLength = Math.max(maxLength, right - left);
      delete curCharMap[s[left]];
      left++;
    }
  }
  maxLength = Math.max(maxLength, right - left);
  return maxLength;
};
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
