/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30204
 *
 * [114] 二叉树展开为链表
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
 * ❎
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flattenX = function (root) {
  let cur = root;
  const rightStack = [];
  while (cur) {
    if (cur.right) {
      rightStack.push(cur.right);
    }
    if (cur.left) {
      cur.right = cur.left;
      cur.left = null;
      cur = cur.right;
    } else {
      cur.right = rightStack.pop();
      cur = cur.right;
    }
  }
};

var flatten1 = function (root) {
  if (!root) return;
  flatten(root.left);
  flatten(root.right);
  const right = root.right;
  root.right = root.left;
  root.left = null;
  // 错误原因：没找到新的右子树的末端
  // root.right.right = right;
  let cur = root;
  while (cur?.right) {
    cur = cur.right;
  }
  cur.right = right;
};

var flatten3 = function (root) {
  if (!root) return;
  let stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    node.left = null;
    if (stack.length) {
      node.right = stack[stack.length - 1];
    }
  }
};

var flatten = function (root) {
  if (!root) return null;
  flatten(root.left);
  flatten(root.right);
  if (root.left) {
    const right = root.right;
    root.right = root.left;
    root.left = null;
    let cur = root.right;
    while (cur.right) {
      cur = cur.right;
    }
    cur.right = right;
  }

  return root;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
