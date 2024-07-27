/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30204
 *
 * [125] 验证回文串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  const isValidChar = (char = "") => {
    return (
      (char <= "z" && char >= "a") ||
      (char <= "Z" && char >= "A") ||
      (char <= "9" && char >= "0")
    );
  };

  while (i < s.length && j >= 0) {
    if (!isValidChar(s[i])) {
      i++;
      continue;
    }
    if (!isValidChar(s[j])) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
// @lc code=end
/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = isPalindrome;
// @lcpr-after-debug-end
