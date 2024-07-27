/*
 * @lc app=leetcode.cn id=103 lang=javascript
 * @lcpr version=30204
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * 错误
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrderX = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  let depth = 0;
  while (queue.length) {
    const toRight = depth % 2 === 0;
    const levelArr = [];
    const levelLength = queue.length;
    const newQueue = [];
    for (let i = 0; i < levelLength; i++) {
      const item = queue.shift();
      levelArr.push(item.val);
      // 以下错误， 只有先将下一层读完才可能知道顺序，
      if (toRight) {
        if (item.left) {
          newQueue.push(item.left);
        }
        if (item.right) {
          newQueue.push(item.right);
        }
      } else {
        if (item.right) {
          newQueue.push(item.right);
        }
        if (newQueue.left) {
          newQueue.push(item.left);
        }
      }
    }
    result.push(levelArr);
    depth++;
    queue = newQueue;
  }
  return result;
};
var zigzagLevelOrder2 = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  let toRight = true;
  while (queue.length) {
    const levelArr = [];
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const item = queue.shift();
      toRight ? levelArr.push(item.val) : levelArr.unshift(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    result.push(levelArr);
    toRight = !toRight;
  }
  return result;
};
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (!result[level]) result[level] = [];
    // const arr = result[level];
    const toRight = level % 2 === 0;
    toRight ? result[level].push(node.val) : result[level].unshift(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = zigzagLevelOrder;
// @lcpr-after-debug-end
