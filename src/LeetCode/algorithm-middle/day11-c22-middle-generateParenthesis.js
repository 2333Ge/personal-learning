/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

有效括号组合需满足：左括号必须以正确的顺序闭合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
  const result = [];
  const temp = [];
  const dfs = (leftRest, right) => {
    if (temp.length === n * 2) {
      result.push(temp.join(""));
      return;
    }
    if (leftRest > 0) {
      temp.push("(");
      dfs(leftRest - 1, right);
      temp.pop();
    }
    if (right < n - leftRest) {
      temp.push(")");
      dfs(leftRest, right + 1);
      temp.pop();
    }
  };
  dfs(n, 0);
  return result;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(3));
