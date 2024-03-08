/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30118
 *
 * [234] 回文链表
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head?.next) return true;
  // 快慢指针找中点
  let slow = head;
  let fast = head.next;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }
  const reverse = (curHead) => {
    if (!curHead?.next) return curHead;
    const reverseHead = reverse(curHead.next);
    curHead.next.next = curHead;
    curHead.next = null;
    return reverseHead;
  };

  let last = reverse(slow.next);
  let start = head;

  // const prints = (head, char = "") => {
  //   let cur = head;
  //   while (cur) {
  //     console.log(`${char}=>`, cur.val);
  //     cur = cur.next;
  //   }
  // };
  // prints(last, "l");
  // prints(start, "s");

  while (last) {
    if (start.val !== last.val) {
      return false;
    }
    start = start.next;
    last = last.next;
  }
  return true;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
