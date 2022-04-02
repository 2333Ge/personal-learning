/**
 * 找到字符串中所有字母异位词
 * 
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

1 <= s.length, p.length <= 3 * 10^4
s 和 p 仅包含小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];
  const targetMap = getStrMap(p);
  const result = [];
  for (let i = 0; i < s.length - p.length + 1; i++) {
    // console.log(s.substr(i, p.length));
    if (p.indexOf(s[i]) !== -1) {
      if (isValid(s.substr(i, p.length), targetMap)) {
        result.push(i);
      }
    }
  }
  return result;
};

const isValid = (s1, targetMap) => {
  const sMap = getStrMap(s1);
  for (let key in targetMap) {
    if (targetMap[key] !== sMap[key]) return false;
  }
  return true;
};

const getStrMap = (s = "") => {
  let result = {};
  for (let i = 0; i < s.length; i++) {
    result[s[i]] = result[s[i]] ? result[s[i]] + 1 : 1;
  }
  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
