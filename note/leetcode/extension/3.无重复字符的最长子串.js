/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (42.27%)
 * Likes:    11395
 * Dislikes: 0
 * Total Accepted:    4.1M
 * Total Submissions: 9.7M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

// @lc code=start

/**
 * 滑动窗口解法
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let res = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    while (set.has(char)) {
      set.delete(s[left]);
      left++;
    }
    res = Math.max(i - left + 1, res);
    set.add(char);
  }
  return res;
};

// var lengthOfLongestSubstring = function (s) {
//   let left = 0; // 左指针
//   let maxLength = 0; // 记录最长子串长度
//   const charSet = new Set(); // 用于存储当前窗口中的字符

//   for (let right = 0; right < s.length; right++) {
//     // 如果字符重复，移动左指针，直到窗口中没有重复字符
//     while (charSet.has(s[right])) {
//       charSet.delete(s[left]);
//       left++;
//     }
//     charSet.add(s[right]); // 将当前字符加入窗口
//     maxLength = Math.max(maxLength, right - left + 1); // 更新最长子串长度
//   }

//   return maxLength;
// };

// /**
//  * 动态规划解法
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstringDP = function (s) {
//   const dp = []; // dp[i] 表示以 s[i] 结尾的最长无重复子串长度
//   const charIndex = {}; // 记录字符上一次出现的位置
//   let maxLength = 0; // 记录最长子串长度

//   for (let i = 0; i < s.length; i++) {
//     if (charIndex[s[i]] !== undefined && charIndex[s[i]] >= i - dp[i - 1]) {
//       // 如果字符重复，且在当前子串范围内
//       dp[i] = i - charIndex[s[i]];
//     } else {
//       // 如果字符不重复
//       dp[i] = (dp[i - 1] || 0) + 1;
//     }
//     charIndex[s[i]] = i; // 更新字符的最新位置
//     maxLength = Math.max(maxLength, dp[i]); // 更新最长子串长度
//   }

//   return maxLength;
// };
// @lc code=end
