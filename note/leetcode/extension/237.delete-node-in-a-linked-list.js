/*
 * @lc app=leetcode.cn id=237 lang=javascript
 * @lcpr version=30204
 *
 * [237] 删除链表中的节点
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node, n) {
  const dummy = { next: node };
  let pre = dummy;
  while (pre && pre.next !== n) {
    pre = pre.next;
  }
  if (pre) {
    pre.next = pre.next?.next;
  }
};
// @lc code=end

/*
// @lcpr case=start
// [4,5,1,9]\n5\n
// @lcpr case=end

// @lcpr case=start
// [4,5,1,9]\n1\n
// @lcpr case=end

 */
