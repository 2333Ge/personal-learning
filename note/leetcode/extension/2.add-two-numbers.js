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
  const dummy = new ListNode();
  let add1 = 0;
  let curL1 = l1,
    curL2 = l2;
  let cur = dummy;
  while (curL1 || curL2) {
    const sum = (curL1?.val || 0) + (curL2?.val || 0) + add1;
    const val = sum % 10;
    add1 = sum >= 10 ? 1 : 0;
    const newNode = new ListNode(val);
    cur.next = newNode;
    cur = newNode;
    curL1 = curL1?.next;
    curL2 = curL2?.next;
  }
  if (add1) {
    cur.next = new ListNode(add1);
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
