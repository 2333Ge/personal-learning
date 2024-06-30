/*
 * @lc app=leetcode.cn id=36 lang=javascript
 * @lcpr version=30204
 *
 * [36] 有效的数独
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = {};
  const colMap = {};
  const spaceMap = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const itemValue = board[i][j];
      if (itemValue === ".") continue;
      const spaceIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      if (!rowMap[i]) rowMap[i] = {};
      if (!colMap[j]) colMap[j] = {};
      if (!spaceMap[spaceIndex]) spaceMap[spaceIndex] = {};

      if (
        rowMap[i][itemValue] ||
        colMap[j][itemValue] ||
        spaceMap[spaceIndex][itemValue]
      ) {
        return false;
      }

      rowMap[i][itemValue] = true;
      colMap[j][itemValue] = true;
      spaceMap[spaceIndex][itemValue] = true;
    }
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

// @lcpr case=start
// [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = isValidSudoku;
// @lcpr-after-debug-end
