/*
 * @lc app=leetcode.cn id=637 lang=javascript
 * @lcpr version=30204
 *
 * [637] 二叉树的层平均值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels1 = function (root) {
  const result = [];
  let level = [root];
  while (level.length) {
    let sum = 0;
    const newLevel = [];
    for (let node of level) {
      sum += node.val;
      node.left && newLevel.push(node.left);
      node.right && newLevel.push(node.right);
    }
    result.push(sum / level.length);
    level = newLevel;
  }
  return result;
};

var averageOfLevels = function (root) {
  // const result = [];
  const levels = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);

  return levels.map(
    (level) => level.reduce((acc, cur) => acc + cur, 0) / level.length
  );
};

// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [3,9,20,15,7]\n
// @lcpr case=end

 */
