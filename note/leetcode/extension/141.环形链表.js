/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let i = head;
  let j = head.next;
  while (j?.next) {
    i = i.next;
    j = j.next?.next;
    if (i === j) {
      return true;
    }
  }
  return false;
};
// @lc code=end

// @lcpr-after-debug-begin
module.exports = hasCycle;
// @lcpr-after-debug-end
