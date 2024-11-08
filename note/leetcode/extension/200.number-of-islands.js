/*
 * @lc app=leetcode.cn id=200 lang=javascript
 * @lcpr version=30204
 *
 * [200] 岛屿数量
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const dfs = (i, j) => {
    if (grid[i]?.[j] === undefined) return;
    if (grid[i][j] === "1") {
      grid[i][j] = 0;
      dfs(i, j - 1);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i + 1, j);
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};
// @lc code=end

/*
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

 */
