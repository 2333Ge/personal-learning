/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30204
 *
 * [54] 螺旋矩阵
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder1 = function (matrix) {
  const append = (matrix, i, j, dir) => {
    let cur = matrix[i]?.[j];
    if (cur === undefined || cur === ".") return;
    let curJ = j;
    let curI = i;
    while (cur !== undefined && cur !== ".") {
      res.push(cur);
      matrix[curI][curJ] = ".";
      switch (dir) {
        case "r":
          curJ++;
          break;
        case "b":
          curI++;
          break;
        case "l":
          curJ--;
          break;
        case "t":
          curI--;
          break;
      }
      cur = matrix[curI]?.[curJ];
    }
    let newDir = "";
    switch (dir) {
      case "r":
        curI++;
        curJ--;
        newDir = "b";
        break;
      case "b":
        curI--;
        curJ--;
        newDir = "l";
        break;
      case "l":
        curI--;
        curJ++;
        newDir = "t";
        break;
      case "t":
        curI++;
        curJ++;
        newDir = "r";
        break;
    }
    append(matrix, curI, curJ, newDir, res);
  };

  const res = [];
  append(matrix, 0, 0, "r", res);
  return res;
};

var spiralOrder = function (matrix) {
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  const res = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (bottom >= top) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */
