/*
 * @lc app=leetcode.cn id=290 lang=javascript
 * @lcpr version=30204
 *
 * [290] 单词规律
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(/\s+/);
  if (pattern.length !== sArr.length) {
    return false;
  }
  const mapPs = new Map();
  const mapSP = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = sArr[i];
    if (mapPs.has(p) && mapPs.get(p) !== word) {
      return false;
    }
    if (mapSP.has(word) && mapSP.get(word) !== p) {
      return false;
    }
    mapPs.set(p, word);
    mapSP.set(word, p);
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// "abba"\n"dog cat cat dog"\n
// @lcpr case=end

// @lcpr case=start
// "abba"\n"dog cat cat fish"\n
// @lcpr case=end

// @lcpr case=start
// "aaaa"\n"dog cat cat dog"\n
// @lcpr case=end

 */
