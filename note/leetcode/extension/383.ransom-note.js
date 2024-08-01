/*
 * @lc app=leetcode.cn id=383 lang=javascript
 * @lcpr version=30204
 *
 * [383] 赎金信
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const map = new Map();
  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of ransomNote) {
    if (map.get(char) === 0 || map.get(char) === undefined) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// "a"\n"b"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"ab"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"aab"\n
// @lcpr case=end

 */
