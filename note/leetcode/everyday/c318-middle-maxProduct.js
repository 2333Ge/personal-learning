/**
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

 

示例 1:

输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
输出: 16 
解释: 这两个单词为 "abcw", "xtfn"。
示例 2:

输入: ["a","ab","abc","d","cd","bcd","abcd"]
输出: 4 
解释: 这两个单词为 "ab", "cd"。
示例 3:

输入: ["a","aa","aaa","aaaa"]
输出: 0 
解释: 不存在这样的两个单词。
 

提示：

2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] 仅包含小写字母


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-of-word-lengths
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const sortWords = words.sort((a, b) => b.length - a.length);
  let l = 0,
    r = 1;
  while (r < words.length) {
    // console.log(l,r, sortWords[l].length*sortWords[r].length)
    console.log(
      hasSameChar(sortWords[l], sortWords[r]),
      sortWords[l],
      sortWords[r]
    );
    if (!hasSameChar(sortWords[l], sortWords[r])) {
      return sortWords[l].length * sortWords[r].length;
    }
    if (l == r - 1) {
      r++;
      continue;
    }

    if (
      r + 1 >= words.length ||
      sortWords[l + 1].length * sortWords[r].length <
        sortWords[l].length * sortWords[r + 1].length
    ) {
      r++;
    } else {
      l++;
      r < l && (r = l + 1);
    }
  }
  return 0;
};

const hasSameChar = (str1 = "", str2 = "") => {
  if (!str1 || !str2) return false;
  for (let value of str1) {
    if (str2.charAt(value) !== -1) {
      return true;
    }
  }
  return false;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
