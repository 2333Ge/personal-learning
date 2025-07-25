/*
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=30204
 *
 * [6] Z 字形变换
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function (s, numRows) {
  if (numRows === 1) return s;
  let dir = "down";
  const res = new Array(numRows).fill("");
  let level = 0;
  let cur = 0;
  while (cur < s.length) {
    res[level] += s[cur];

    if (dir === "down" && level === numRows - 1) {
      dir = "up";
    } else if (dir === "up" && level === 0) {
      dir = "down";
    }

    level += dir === "up" ? -1 : 1;
    cur++;
  }
  return res.join("");
};

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rowsStr = Array.from({ length: numRows }).fill("");
  let curRow = 0;
  let dir = "down";
  for (let i = 0; i < s.length; i++) {
    rowsStr[curRow] += s[i];
    if (dir === "down") {
      if (curRow === numRows - 1) {
        curRow--;
        dir = "up";
      } else {
        curRow++;
      }
    } else if (dir === "up") {
      if (curRow === 0) {
        curRow++;
        dir = "down";
      } else {
        curRow--;
      }
    }
  }
  return rowsStr.join("");
};
// @lc code=end

/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */
