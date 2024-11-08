/*
 * @lc app=leetcode.cn id=104 lang=javascript
 * @lcpr version=30204
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  const dfs = (node, level) => {
    if (!node) {
      res = Math.max(level, res)
      return;
    }
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)

  }
  dfs(root, 0)
  return res;
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */

