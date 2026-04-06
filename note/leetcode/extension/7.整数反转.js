/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode.cn/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (35.64%)
 * Likes:    4161
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 4M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 *
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 123
 * 输出：321
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = -123
 * 输出：-321
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 120
 * 输出：21
 *
 *
 * 示例 4：
 *
 *
 * 输入：x = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  // 将整数转为字符串并处理符号
  const sign = x < 0 ? -1 : 1;
  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join(""),
    10,
  );
  // 检查是否溢出
  if (reversed > 2 ** 31 - 1) return 0;
  return reversed * sign;
}

// @lc code=end
