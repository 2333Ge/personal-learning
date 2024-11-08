/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30204
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // function ListNode(val, next) {
  //   this.val = val === undefined ? 0 : val;
  //   this.next = next === undefined ? null : next;
  // }
  if (!head?.next) return head;
  let smallDummy = new ListNode();
  let smallPre = smallDummy;
  const largeDummy = new ListNode();
  let largePre = largeDummy;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      smallPre.next = cur;
      smallPre = smallPre.next;
    } else {
      largePre.next = cur;
      largePre = largePre.next;
    }
    cur = cur.next;
  }
  smallPre.next = largeDummy.next;
  largePre.next = null;

  return smallDummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = partition;
// @lcpr-after-debug-end
