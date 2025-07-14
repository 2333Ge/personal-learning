/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30204
 *
 * [102] 二叉树的层序遍历
 * 【重要】
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
 * @return {number[][]}
 */
var levelOrder1 = function (root) {
  // 广度有限
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const levelSize = queue.length;
    const levelValues = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelValues.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(levelValues);
  }
  return res;
};

var levelOrder3 = function (root) {
  // 深度有限
  if (!root) return [];
  const res = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (!res[level]) res[level] = [];
    res[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return res;
};

var levelOrder = function (root) {
  
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
