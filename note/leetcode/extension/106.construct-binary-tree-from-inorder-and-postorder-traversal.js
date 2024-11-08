/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=30204
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree1 = function (inorder, postorder) {
  if (!inorder.length) return null;
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal, null, null);
  const inorderIndex = inorder.findIndex((inval) => inval === rootVal);
  root.left = buildTree(
    inorder.slice(0, inorderIndex),
    postorder.slice(0, inorderIndex)
  );
  root.right = buildTree(
    inorder.slice(inorderIndex + 1),
    postorder.slice(inorderIndex, postorder.length - 1)
  );
  return root;
};

var buildTree = function (inorder, postorder) {
  if (!inorder?.length) return null;
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  const inorderCenterIndex = inorder.findIndex(
    (item) => item === rootVal
  );
  root.left = buildTree(
    inorder.slice(0, inorderCenterIndex),
    postorder.slice(0, inorderCenterIndex)
  );
  root.right = buildTree(
    inorder.slice(inorderCenterIndex + 1),
    postorder.slice(inorderCenterIndex, postorder.length - 1)
  );
  return root;
};

// @lc code=end

/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
