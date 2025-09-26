/*
 * @lc app=leetcode.cn id=433 lang=javascript
 * @lcpr version=30204
 *
 * [433] 最小基因变化
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * ❎
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */


var minMutation = function (startGene, endGene, bank) {
  if (startGene.length !== endGene.length) return -1;
  if (startGene === endGene) return 0;
  const bankSet = new Set(bank);
};
// @lc code=end

/*
// @lcpr case=start
// "AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]\n
// @lcpr case=end

// @lcpr case=start
// "AACCGGTT"\n"AAACGGTA"\n["AACCGGTA","AACCGCTA","AAACGGTA"]\n
// @lcpr case=end

// @lcpr case=start
// "AAAAACCC"\n"AACCCCCC"\n["AAAACCCC","AAACCCCC","AACCCCCC"]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = minMutation;
// @lcpr-after-debug-end
