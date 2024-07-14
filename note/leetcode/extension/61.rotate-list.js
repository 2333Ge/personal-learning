/*
 * @lc app=leetcode.cn id=61 lang=javascript
 * @lcpr version=30204
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head?.next) return head;
  let length = 1;
  let cur = head;
  while (cur.next) {
    length++;
    cur = cur.next;
  }
  cur.next = head;
  let step = length - k % length;
  while (step) {
    cur = cur.next;
    step--;
  }
  const result = cur.next;
  cur.next = null;
  return result;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = rotateRight;
// @lcpr-after-debug-end