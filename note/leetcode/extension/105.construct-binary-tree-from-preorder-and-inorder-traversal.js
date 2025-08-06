/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30204
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree1 = function (preorder, inorder) {
  if (!preorder.length) return null;
  const root = new TreeNode(preorder[0], null, null);
  const preorderIndex = inorder.findIndex((inval) => inval === preorder[0]);
  // 由中序遍历知道左右子树长度
  root.left = buildTree(
    preorder.slice(1, preorderIndex + 1),
    inorder.slice(0, preorderIndex)
  );
  root.right = buildTree(
    preorder.slice(preorderIndex + 1),
    inorder.slice(preorderIndex + 1)
  );

  return root;
};

var buildTree2 = function (preorder, inorder) {
  if (!preorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const inorderCenterIndex = inorder.findIndex((item) => item === preorder[0]);

  root.left = buildTree(
    preorder.slice(1, inorderCenterIndex + 1),
    inorder.slice(0, inorderCenterIndex)
  );
  root.right = buildTree(
    preorder.slice(inorderCenterIndex + 1),
    inorder.slice(inorderCenterIndex + 1)
  );

  return root;
};

var buildTree = function (preorder = [], inorder = []) {
  
};

// @lc code=end

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
