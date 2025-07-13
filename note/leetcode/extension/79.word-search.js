/*
 * @lc app=leetcode.cn id=79 lang=javascript
 * @lcpr version=30204
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist1 = function (board, word) {
  const backTrack = (i, j, index) => {
    if (index === word.length) return true;

    if (
      i < 0 ||
      j < 0 ||
      i >= board.length ||
      j >= board[0].length ||
      board[i][j] !== word[index]
    )
      return false;
    let temp = board[i][j];
    board[i][j] = "*";
    let res =
      backTrack(i - 1, j, index + 1) ||
      backTrack(i + 1, j, index + 1) ||
      backTrack(i, j - 1, index + 1) ||
      backTrack(i, j + 1, index + 1);
    board[i][j] = temp;
    return res;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backTrack(i, j, 0)) return true;
    }
  }
  return false;
};

var exist = function (board, word) {

  
};

// @lc code=end

/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */
