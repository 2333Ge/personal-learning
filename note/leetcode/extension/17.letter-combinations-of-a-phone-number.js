/*
 * @lc app=leetcode.cn id=17 lang=javascript
 * @lcpr version=30204
 *
 * [17] 电话号码的字母组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations1 = function (digits) {
  if (!digits?.length) return [];
  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  const backStack = (str) => {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }
    const index = str.length;
    for (let char of letterMap[digits[index]]) {
      backStack(str + char);
    }
  };
  backStack("");
  return result;
};

var letterCombinations2 = function (digits) {
  if (!digits?.length) return [];
  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let pre = [];
  for (let num of digits) {
    const cur = [];
    for (let char of letterMap[num]) {
      if (!pre.length) cur.push(char);
      else {
        pre.forEach((oldStr) => {
          cur.push(oldStr + char);
        });
      }
    }
    pre = cur;
  }
  return pre;
};

var letterCombinations3 = function (digits) {
  if (!digits?.length) return [];
  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let pre = [];
  for (let num of digits) {
    const cur = [];
    for (char of letterMap[num]) {
      if (!pre.length) cur.push(char);
      else {
        pre.forEach((oldStr) => {
          cur.push(oldStr + char);
        });
      }
    }
    pre = cur;
  }
  return pre;
};

var letterCombinations = function (digits) {
  if (!digits?.length) return [];
  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res = [];
  const backTrace = (str) => {
    if (str.length === digits.length) {
      res.push(str);
      return;
    }
    for (char of letterMap[digits[str.length]]) {
      backTrace(str + char);
    }
  };
  backTrace("");
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
