/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30204
 *
 * [92] 反转链表 II
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
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// 思路：递归解法，分两步
var reverseBetween4 = function (head, left, right) {
  if (!head || !head.next || left === right) {
    return head;
  }
  // 反转前N个节点的辅助函数
  const reverseNN = (head, n) => {
    if (n === 1) {
      return head;
    }
    // 下次循环的尾节点
    const tail = head.next;
    const newHead = reverseNN(head.next, n - 1);
    // head是本次循环的尾节点，指向上次循环的的尾节点的下一节点
    head.next = tail.next;
    // 反转后的尾节点指向反转前的头节点
    tail.next = head;
    return newHead;
  };

  if (left === 1) {
    return reverseNN(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};

var reverseBetween5 = function (head, left, right) {
  if (left === right) return head;
  let dummy = { next: head };
  let cur = 0;
  let pre = dummy;
  while (cur < left - 1) {
    pre = pre.next;
    cur++;
  }

  // start是反转区间的第一个节点
  let start = pre.next;
  // then是start的下一个节点
  let then = start.next;

  while (cur < right - 1) {
    start.next = then?.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
    cur++;
  }

  return dummy.next;
};

var reverseBetween = function (head, left, right) {
  if (!head?.next || left === right) return head;
  let cur = 0;
  let dummy = { next: head };
  let curNode = dummy;

  while (cur < left - 1) {
    // 注意这里是-1
    cur++;
    curNode = curNode.next;
  }

  let pre = curNode;
  let start = pre.next;
  let then = start.next;

  while (cur < right - 1) {
    start.next = then?.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
    cur++;
  }

  return dummy.next;
};
// [1,2,3,4,5]
var reverseBetween = function (head, left, right) {
  if (!head?.next || left === right) return head;
  let cur = 1;
  let dummy = { next: head };
  let pre = dummy;
  while (cur < left) {
    pre = pre.next;
    cur++;
  }

  const start = pre.next;
  let then = start.next;
  while (cur < right) {
    start.next = then?.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
    cur++;
  }

  return dummy.next;
};

// a -> b -> c -> d -> e
// a -> c -> b -> d -> e
var reverseBetween = function (head, left, right) {
  const dummy = { next: head };
  let pre = dummy;
  let cur = 1; // 注意这里

  while (cur < left) {
    pre = pre.next;
    cur++;
  }

  let start = pre.next;
  let then = start?.next;

  while (cur < right) {
    start.next = then?.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
    cur++;
  }

  return dummy.next;
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = reverseBetween;
// @lcpr-after-debug-end
