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

/**解法不行 */
var lengthOfLongestSubstring1 = function (s) {
  if (!s?.length || s.length === 1) return s?.length || 0;
  let map = {};
  let res = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] !== undefined) {
      res = Math.max(res, i - left);
      if (map[char] + 1 > left) {
        left = map[char] + 1;
      }
      map[char] = i;
    } else {
      map[char] = i;
    }
  }

  return Math.max(res, s.length - left);
};

var lengthOfLongestSubstring = function (s) {
  
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

// @lcpr-after-debug-begin
module.exports = lengthOfLongestSubstring;
// @lcpr-after-debug-end
