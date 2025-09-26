/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30204
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let plus = 0;
  let a = l1;
  let b = l2;
  const dummy = { next: null };
  let cur = dummy;
  while (a || b) {
    const temp = plus + (a?.val || 0) + (b?.val || 0);
    plus = Math.floor(temp / 10);
    cur.next = new ListNode(temp % 10);
    cur = cur.next;
    a = a?.next;
    b = b?.next;
  }

  if (plus) {
    cur.next = new ListNode(plus);
  }

  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */
