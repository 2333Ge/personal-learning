/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let root1 = l1;
  let root2 = l2;
  let above10 = false;
  let dummy = { next: null };
  let cur = dummy;
  while (root1 || root2) {
    const val = (root1?.val || 0) + (root2?.val || 0) + (above10 ? 1 : 0);
    above10 = val >= 10;
    cur.next = new ListNode(val % 10);
    cur = cur.next;
    root1 = root1?.next;
    root2 = root2?.next;
  }

  // 易错
  if (above10) {
    cur.next = new ListNode(1);
  }
  return dummy.next;
};
// @lc code=end
