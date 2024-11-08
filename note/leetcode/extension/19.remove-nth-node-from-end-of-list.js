/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30122
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  let dummy = { next: head };
  let count = 0;
  let pre = dummy;
  while (pre.next) {
    count++;
    pre = pre.next;
  }
  let step = count - n;
  pre = dummy;
  while (step) {
    pre = pre.next;
    step--;
  }
  pre.next = pre.next.next;
  return dummy.next;
};

var removeNthFromEnd = function (head, n) {
  let dummy = { next: head };
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
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
