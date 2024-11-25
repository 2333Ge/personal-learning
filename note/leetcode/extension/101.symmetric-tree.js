/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30204
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isSame = (left, right) => {
    if (!left && !right) return true;
    return (
      left?.val === right?.val &&
      isSame(left?.left, right?.right) &&
      isSame(left?.right, right?.left)
    );
  };

  return isSame(root.left, root.right);
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */