/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30204
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let result;
  const inOrder = (node) => {
    if (!node || result !== undefined) return;
    inOrder(node.left);
    count++;
    if (count === k) {
      result = node.val;
    }
    inOrder(node.right);
  };
  inOrder(root);
  return result;
};

var kthSmallest = function (root, k) {
  let step = 1;
  let res;
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    if (step === k) {
      res = node.val;
    }
    step++;
    inOrder(node.right);
  };
  inOrder(root);
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */
