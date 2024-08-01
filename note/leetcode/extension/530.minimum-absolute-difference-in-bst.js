/*
 * @lc app=leetcode.cn id=530 lang=javascript
 * @lcpr version=30204
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference1 = function (root) {
  if (!root) return Infinity;
  const getMax = (root) => {
    if (!root) return Infinity;
    return root.right ? getMax(root.right) : root.val;
  };
  const getMin = (root) => {
    if (!root) return Infinity;
    return root.left ? getMin(root.left) : root.val;
  };

  return Math.min(
    Math.abs(root.val - getMax(root.left)),
    Math.abs(root.val - getMin(root.right)),
    getMinimumDifference(root.left),
    getMinimumDifference(root.right)
  );
};

var getMinimumDifference2 = function (root) {
  if (!root) return Infinity;
  const arr = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, arr[i + 1] - arr[i]);
  }
  return min;
};

var getMinimumDifference = function (root) {
  let result = Infinity;
  let pre = Infinity;
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    result = Math.min(result, Math.abs(node.val - pre));
    pre = node.val;
    inorder(node.right);
  };
  inorder(root);
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */
