/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30204
 *
 * [236] 二叉树的最近公共祖先
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const tmpLog = (path) => {
  console.log("res====>", path.map((item) => item.val).join("->"));
};
var lowestCommonAncestor = function (root, p, q) {
  let pPath,
    qPath,
    path = [];
  const dfs = (node) => {
    if (!node) return;
    path.push(node);
    if (node === p) {
      pPath = path.slice();
    }
    if (node === q) {
      qPath = path.slice();
    }
    // path.push(node);  // 为什么放到这里就有问题，当前节点可能是某个其中一个节点的父节点

    dfs(node.left);
    dfs(node.right);
    path.pop();
  };
  dfs(root);
  // tmpLog(pPath);
  // tmpLog(qPath);

  for (let i = 0; i < pPath.length && i < qPath.length; i++) {
    if (pPath[i] !== qPath[i]) {
      return pPath[i - 1];
    } else if (i === pPath.length - 1 || i === qPath.length - 1) {
      return pPath[i];
    }
  }
  return null;
};
// @lc code=end

/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */
