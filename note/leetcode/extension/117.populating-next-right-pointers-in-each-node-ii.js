/*
 * @lc app=leetcode.cn id=117 lang=javascript
 * @lcpr version=30204
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  const levelLasts = {};
  if (!root) return root;
  const dfs = (node, level) => {
    if (!node) return;
    if (levelLasts[level]) {
      node.next = levelLasts[level];
      levelLasts[level] = node;
    } else {
      levelLasts[level] = node;
    }
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };
  dfs(root, 0);
  return root;
};


var connect = function (root) {

  
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,null,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
