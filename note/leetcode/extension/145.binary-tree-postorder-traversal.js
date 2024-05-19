/*
 * @lc app=leetcode.cn id=145 lang=javascript
 * @lcpr version=30119
 *
 * [145] 二叉树的后序遍历
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
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal1 = function (root) {
  if (!root) return [];
  const result = [];
  const tra = (node) => {
    if (!node) return;
    tra(node.left);
    tra(node.right);
    result.push(node.val);
  };
  tra(root);
  return result;
};
/**
 * 迭代
 * 中右左翻转一下
 * todo: 为什么是对称的
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const stack = [];
  const result = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      result.push(cur.val);
      cur = cur.right;
    } else {
      cur = stack.pop();
      cur = cur.left;
    }
  }
  return result.reverse();
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
