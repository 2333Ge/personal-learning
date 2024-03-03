/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 * 链表、双指针
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;
  let slow = head.next;
  let fast = head.next?.next;
  let touch = false;
  while (fast?.next) {
    // 先判断再移动指针，可能起点即交点
    if (slow === fast) {
      if (touch) {
        return slow;
      }
      fast = head;
      touch = true;
      continue;
    }
    if (!touch) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return null;
};
// @lc code=end

var detectCycle2 = function (head) {
  
}