/*
 * @lc app=leetcode.cn id=8 lang=javascript
 * @lcpr version=30202
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let resultStr = "";

  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (char === " " && !resultStr) continue;
    if (
      !resultStr &&
      (char < "0" || char > "9") &&
      char !== "-" &&
      char !== "+"
    )
      return 0;
    if (resultStr && (char < "0" || char > "9")) break;
    resultStr += char;
  }
  if (resultStr === "0" || resultStr === "-" || resultStr == "+" || !resultStr)
    return 0;
  const value = resultStr ? parseInt(resultStr) : 0;
  if (value >= 0) return Math.min(value, Math.pow(2, 31) - 1);
  if (value < 0) return Math.max(value, -Math.pow(2, 31));
};

// @lc code=end
/*
// @lcpr case=start
// "42"\n
// @lcpr case=end

// @lcpr case=start
// " -042"\n
// @lcpr case=end

// @lcpr case=start
// "1337c0d3"\n
// @lcpr case=end

// @lcpr case=start
// "0-1"\n
// @lcpr case=end

// @lcpr case=start
// "words and 987"\n
// @lcpr case=end

 */

// 计算2的32次方
