/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30204
 *
 * [98] 验证二叉搜索树
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
 * 错误，
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST1 = function (root) {
  const dfs = (node, pathMax, pathMin) => {
    if (!node) return true;
    const _pathMax =
      pathMax === undefined ? node.val : Math.max(pathMax, node.val);
    const _pathMin =
      pathMin === undefined ? node.val : Math.min(pathMin, node.val);
    console.log("name====>", _pathMin, _pathMax, node.val);

    if (node.left) {
      if (node.left.val >= _pathMin) return false;
    }

    if (node.right) {
      if (node.right.val <= _pathMax) return false;
    }
    return (
      dfs(node.left, _pathMax, _pathMin) && dfs(node.right, _pathMax, _pathMin)
    );
  };
  const res = dfs(root);
  console.log("res====>", res);
  return res;
  // return dfs(root);
};

var isValidBST1 = function (root) {
  function validate(node, low, high) {
    if (node === null) return true;
    if (node.val <= low || node.val >= high) return false;
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  }
  return validate(root, -Infinity, Infinity);
};

var isValidBST = function (root) {
  const validate = (node, low, high) => {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  };
  return validate(root, -Infinity, Infinity);
};
// @lc code=end

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = isValidBST;
// @lcpr-after-debug-end
