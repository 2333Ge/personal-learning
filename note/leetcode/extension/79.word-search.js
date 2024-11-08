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
var exist = function (board, word) {
  let visited = new Map();
  const backTrack = (i, j, index) => {
    if (board[i][j] !== word[index]) return false;
    visited[i * board.length + j] = true;
    // backTrack(i-1, j, ) || backTrack[]

    visited[i * board.length + j] = false;


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

