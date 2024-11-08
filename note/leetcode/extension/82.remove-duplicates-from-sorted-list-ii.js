/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30204
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head?.next) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let cur = head;
  const delVals = new Set();
  while (cur.next) {
    if (cur.val === cur.next.val) {
      delVals.add(cur.val);
    }
    cur = cur.next;
  }
  let pre = dummy;
  cur = head;
  while (cur) {
    if (!delVals.has(cur.val)) {
      pre.next = cur;
      pre = pre.next;
    }
    cur = cur.next;
  }
  pre.next = null;
  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */
