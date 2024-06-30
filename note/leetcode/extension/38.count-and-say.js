/*
 * @lc app=leetcode.cn id=38 lang=javascript
 * @lcpr version=30204
 *
 * [38] 外观数列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  let result = "";
  let previousChar = "";
  let count = 0;
  for (let char of countAndSay(n - 1)) {
    if (char != previousChar) {
      if (previousChar) {
        result += `${count}${previousChar}`;
      }
      count = 1;
      previousChar = char;
    } else {
      count++;
    }
  }
  result += `${count}${previousChar}`;
  return result;
};
// @lc code=end
console.log("rre====>", countAndSay(6));
/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = countAndSay;
// @lcpr-after-debug-end
