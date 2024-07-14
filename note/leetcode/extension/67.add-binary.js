/*
 * @lc app=leetcode.cn id=67 lang=javascript
 * @lcpr version=30204
 *
 * [67] 二进制求和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let jin = 0;
  let result = "";
  for (let i = 0; i < a.length || i < b.length; i++) {
    const aa = a[a.length - 1 - i] || 0;
    const bb = b[b.length - 1 - i] || 0;
    if (Number(aa) + Number(bb) + jin >= 2) {
      result = `${(Number(aa) + Number(bb) + jin) % 2}${result}`;
      jin = 1;
    } else {
      result = `${Number(aa) + Number(bb) + jin}${result}`;
      jin = 0;
    }
  }
  if (jin) {
    result = `1${result}`;
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */
