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
var reverseBetween = function (head, left, right) {
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

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */
