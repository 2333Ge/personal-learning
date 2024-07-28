/*
 * @lc app=leetcode.cn id=202 lang=javascript
 * @lcpr version=30204
 *
 * [202] 快乐数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getHappyOnce = (n) => {
    let result = 0;
    let cur = n;
    while (cur) {
      result += (cur % 10) * (cur % 10);
      cur = Math.floor(cur / 10);
    }
    return result;
  };
  let set = new Set();
  let once = n;
  while (once !== 1) {
    if (set.has(once)) {
      return false;
    } else {
      set.add(once);
    }
    once = getHappyOnce(once);
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// 19\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */
