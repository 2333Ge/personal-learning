/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30204
 *
 * [49] 字母异位词分组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const sortStr = str
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");
    if (map.has(sortStr)) {
      map.get(sortStr).push(str);
    } else {
      map.set(sortStr, [str]);
    }
  }
  return [...map.values()];
};
// @lc code=end

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
