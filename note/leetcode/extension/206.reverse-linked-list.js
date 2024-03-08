/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30118
 *
 * [206] 反转链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 待看题解
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归写法
 * */
var reverseList = function (head) {
  if (!head?.next) return head;
  let reverseHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
// @lcpr-after-debug-end

/**
 * 首次尝试，有多余代码
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList0 = function (head) {
  if (!head?.next) return head;
  let changeNode = head;
  let curNode = head.next;
  let nextNode = head.next?.next;
  changeNode.next = null;
  while (curNode) {
    curNode.next = changeNode;
    changeNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }
  return changeNode;
};

/**
 * 迭代写法
 * */
var reverseList1 = function (head) {
  if (!head?.next) return head;
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
