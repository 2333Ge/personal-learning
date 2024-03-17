/*
 * @lc app=leetcode.cn id=94 lang=javascript
 * @lcpr version=30119
 *
 * [94] 二叉树的中序遍历
 * 用两种写法递归、迭代
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
 * 递归写法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function (root) {
  if (!root) return [];
  const result = [];

  const tra = (node) => {
    node.left && tra(node.left);
    result.push(node.val);
    node.right && tra(node.right);
  };
  tra(root);
  return result;
};
/**
 * 迭代写法
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const stack = [];
  const result = [];
  let curNode = root;
  while (stack.length && curNode) {
    if (curNode.left) {
      stack.push(curNode);
      curNode = curNode.left;
    } else {
      result.push(curNode.val);
      curNode = stack.pop();
      result.push(curNode.val);
      curNode = curNode.right;
    }
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
