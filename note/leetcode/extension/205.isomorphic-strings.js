/*
 * @lc app=leetcode.cn id=205 lang=javascript
 * @lcpr version=30204
 *
 * [205] 同构字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let mapST = new Map();
  let mapTS = new Map();
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (
      (mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)
    ) {
      return false;
    }
    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// "egg"\n"add"\n
// @lcpr case=end

// @lcpr case=start
// "foo"\n"bar"\n
// @lcpr case=end

// @lcpr case=start
// "paper"\n"title"\n
// @lcpr case=end

 */
