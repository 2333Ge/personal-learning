/**
 * 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。

二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

 

示例 1：


输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true
示例 2：


输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false
 

提示：

root 树上的节点数量范围是 [1, 2000]
subRoot 树上的节点数量范围是 [1, 1000]
-10^4 <= root.val <= 10^4
-10^4 <= subRoot.val <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subtree-of-another-tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// function transArray2Tree(arr = []){
//   const dummyNode = new TreeNode();
//   for()
// }

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  return dfs(root, subRoot);
};

const dfs = function (root, sub) {
  if (!root && sub) return false;
  return check(root, sub) || dfs(root.left, sub) || dfs(root.right, sub);
};

const check = function (root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot || root.val !== subRoot.val) {
    return false;
  }
  return check(root.left, subRoot.left) && check(root.right, subRoot.right);
};

const root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);

console.log(isSubtree(root, new TreeNode(1)));
