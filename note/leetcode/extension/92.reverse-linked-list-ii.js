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
 * ❎
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween1 = function (head, left, right) {
  if (left === right) return head;
  let left_1Node;
  let leftNode = head;
  let right1Node;
  let curNode = head;
  let count = 1;
  // 记录断开点
  while (curNode) {
    if (count === left - 1) {
      left_1Node = curNode;
    }
    if (count === left) {
      leftNode = curNode;
    }
    if (count === right) {
      // 接头
      left_1Node.next = curNode;
    }
    if (count === right + 1) {
      right1Node = curNode;
    }
    count++;
    curNode = curNode.next;
  }
  // 翻转中间
  curNode = leftNode;
  let j = curNode.next;
  while (j) {
    const temp = j?.next;
    j.next = curNode;
    curNode = j;
    j = temp;
  }
  // 接尾
  curNode.next = right1Node;
  return head;
};
/**
 *【重要】
 * @param {*} head
 * @param {*} left
 * @param {*} right
 * @returns
 */
var reverseBetween2 = function (head, left, right) {
  if (left === right || !head) return head;
  // 基操
  let dummy = { next: head };
  let pre = dummy;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  let start = pre.next;
  let then = start.next;
  // 开始翻转
  for (let i = 0; i < right - left; i++) {
    // const tmp = then.next;
    start.next = then.next;

    then.next = pre.next;
    // then.next = start; // 不行

    pre.next = then;

    // then = tmp;
    then = start.next;
  }

  return dummy.next;
};

var reverseBetweenX = function (head, left, right) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  const dummy = new ListNode();
  dummy.next = head;
  let step = 1;
  let cur = dummy;
  while (step < left) {
    cur = cur.next;
    step++;
  }

  let then = cur.next;

  while (step <= right) {
    const nextThen = then.next;
    then.next = cur;
    cur.next = nextThen;
    cur = cur.next;
    then = nextThen;
    step++;
  }

  return dummy.next;
};

var reverseBetween3 = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right);
  }
  reverseBetween(head.next, left - 1, right - 1);
  return head;
};

const reverseN = (head, n) => {
  if (n === 1) {
    return head;
  }
  const tail = head.next;
  const newHead = reverseN(head.next, n - 1);
  head.next = tail.next;
  tail.next = head;
  return newHead;
};

// 思路：递归解法，分两步
var reverseBetween = function (head, left, right) {
  if (!head || !head.next || left === right) {
    return head;
  }
  if (left === 1) {
    return reverseNN(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};

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
