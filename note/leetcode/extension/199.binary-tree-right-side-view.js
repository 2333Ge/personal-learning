/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30204
 *
 * [199] 二叉树的右视图
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
var rightSideView1 = function (root) {
  if (!root) return [];
  const res = [];
  let level = [root];
  while (level.length) {
    const newLevel = [];
    while (level.length) {
      const node = level.shift();
      if (!level.length) res.push(node.val);
      node.left && newLevel.push(node.left);
      node.right && newLevel.push(node.right);
    }
    level = newLevel;
  }
  return res;
};

var rightSideView = function (root) {
  if (!root) return [];
  const res = [];
  const dfs = (node, depth) => {
    if (!node) return;
    if (res.length === depth) res.push(node.val);
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  };
  dfs(root, 0);
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
