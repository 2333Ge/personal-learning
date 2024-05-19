/*
 * @lc app=leetcode.cn id=144 lang=javascript
 * @lcpr version=30119
 *
 * [144] 二叉树的前序遍历
 * 递归 + 迭代
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
var preorderTraversal1 = function (root) {
  if (!root) return [];
  const result = [];
  const tra = (node) => {
    if (!node) return;
    result.push(node.val);
    tra(node.left);
    tra(node.right);
  };
  tra(root);
  return result;
};
/**
 * 迭代写法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  let curNode = root;
  const stack = [];
  while (curNode || stack.length) {
    result.push(curNode.val);
    if (curNode.right) {
      stack.push(curNode.right);
    }
    if (curNode.left) {
      curNode = curNode.left;
    } else {
      curNode = stack.pop();
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

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */
