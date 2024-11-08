/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=30204
 *
 * [121] 买卖股票的最佳时机
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrise = Infinity;
  let maxProfit = 0;
  for (price of prices) {
    if (price < minPrise) {
      minPrise = price;
    }
    maxProfit = Math.max(maxProfit, price - minPrise);
  }
  return maxProfit;
};
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
