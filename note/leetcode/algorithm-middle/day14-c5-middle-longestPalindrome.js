/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let result = "";
  const getHui = (l, r) => {
    let left = l - 1,
      right = r + 1;
    let huiStr = l === r ? `${s[l]}` : `${s[l]}${s[r]}`;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      huiStr = `${s[left]}${huiStr}${s[right]}`;
      left--;
      right++;
    }
    return huiStr;
  };

  let dfs = (curIndex) => {
    if (curIndex > s.length - 1) return;
    if (s[curIndex] === s[curIndex - 1]) {
      const newStr = getHui(curIndex - 1, curIndex);
      if (newStr.length > result.length) result = newStr;
    }
    if (s[curIndex + 1] === s[curIndex - 1]) {
      const newStr = getHui(curIndex, curIndex);
      if (newStr.length > result.length) result = newStr;
    }
    dfs(curIndex + 1);
  };
  dfs(0);
  return result || s[0];
};

console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
