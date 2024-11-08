/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * 硬解
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  if (!head || n === 0) return head;
  let total = 1;
  let p = head;
  while (p.next) {
    p = p.next;
    total++;
  }
  p = head;
  let count = 1;
  if (total === n) return head.next;
  while (p) {
    if (count === total - n) {
      p.next = p.next?.next;
      return head;
    }
    count++;
    p = p.next;
  }
};

var removeNthFromEnd = function (head, n) {
  if (!head || n === 0) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  let step = n;
  while (step) {
    fast = fast.next;
    step--;
  }

  while (fast?.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;

}
// @lc code=end

// 待看题解
