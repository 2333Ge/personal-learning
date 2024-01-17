/**
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// 初解失败，无法处理无重复的情况
const maxStrLength1 = (s) => {
  if (!s?.length) return 0;
  let result = 0;
  let charIndex = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charIndex[char] !== undefined) {
      result = Math.max(i - charIndex[char], result);
    }
    charIndex[char] = i;
  }

  return result;
};


const maxStrLength = (s) => {
  if (!s?.length) return 0; 
  if (s.length === 1) return 1;
  let result = 0;
  let charIndex = {};
  for (let i = 0; i < s.length; i++) {
    charIndex = {};
    for (let j = i + 1; j < s.length; j++) {
      const char = s[j];
      if (s[j] === s[i]) {
        result = Math.max(j - i, result);
        break;
      } else if (charIndex[char]) {
        i = charIndex[char] + 1;
        break;
      } else {
        charIndex[char] = j;
      }
      if (j === s.length - 1) {
        result = Math.max(s.length - i, result);
        return result;
      }
    }
  }

  return result;
};

console.log("2====>", maxStrLength("cdd"));
console.log("2====>", maxStrLength("gga"));
console.log("3====>", maxStrLength("abcabcbb"));
console.log("1====>", maxStrLength("bbbb"));
console.log("3====>", maxStrLength("pwwkew"));
console.log("1====>", maxStrLength("g"));
console.log("1====>", maxStrLength("gg"));
console.log("26====>", maxStrLength("qwertyuiopasdfghjklzxcvbnm"));
