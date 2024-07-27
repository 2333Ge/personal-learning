/*
 * @lc app=leetcode.cn id=150 lang=javascript
 * @lcpr version=30204
 *
 * [150] 逆波兰表达式求值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (Number.isNaN(Number(tokens[i]))) {
      const n2 = stack.pop();
      const n1 = stack.pop();
      const result = calculate(n1, n2, tokens[i]);
      stack.push(result);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Math.floor(stack[0]);
};
const calculate = (n1, n2, operator) => {
  const num1 = Number(n1);
  const num2 = Number(n2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/": // 两个整数之间的除法总是 向零截断：负数除法时向上去整
      return num1 / num2 >= 0
        ? Math.floor(num1 / num2)
        : Math.ceil(num1 / num2);
  }
};
// @lc code=end

/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = evalRPN;
// @lcpr-after-debug-end
