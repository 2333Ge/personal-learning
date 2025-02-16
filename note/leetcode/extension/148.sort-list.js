/*
 * @lc app=leetcode.cn id=148 lang=javascript
 * @lcpr version=30204
 *
 * [148] 排序链表
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

const merge = (list1, list2) => {
  const dummy = new ListNode();
  let cur = dummy;
  let l1 = list1,
    l2 = list2;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) cur.next = l1;
  if (l2) cur.next = l2;
  return dummy.next;
};

var sortList1 = function (head) {
  if (!head?.next) return head;
  let slow = head;
  let fast = head;
  let pre = null; // 注意slow指针的位置，需要pre来断开连接
  while (fast?.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  const right = sortList(pre.next);
  pre.next = null;
  const left = sortList(head);

  return merge(left, right);
};

var sortList2 = function (head) {
  if (!head?.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const right = sortList(slow.next);
  slow.next = null;
  const left = sortList(head);

  const merge = (left, right) => {
    let curL = left;
    let curR = right;
    const dummy = { next: null };
    let cur = dummy;
    while (curL && curR) {
      if (curL.val < curR.val) {
        cur.next = curL;
        curL = curL.next;
      } else {
        cur.next = curR;
        curR = curR.next;
      }
      cur = cur.next;
    }

    if (curL) cur.next = curL;
    if (curR) cur.next = curR;
    return dummy.next;
  };
  return merge(left, right);
};

const mergehh = (l1, l2) => {
  let curL = l1;
  let curR = l2;
  let cur = { next: null };
  let dummy = cur;
  while (curL && curR) {
    if (curL.val < curR.val) {
      cur.next = curL;
      curL = curL.next;
    } else {
      cur.next = curR;
      curR = curR.next;
    }
    cur = cur.next;
  }

  if (curL) {
    cur.next = curL;
  }
  if (curR) {
    cur.next = curR;
  }

  return dummy.next;
};

var sortList99 = function (head) {
  if (!head?.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const rightStart = slow.next;
  slow.next = null;

  const left = sortList(head);
  const right = sortList(rightStart);

  const newHead = mergehh(left, right);

  return newHead;
};

var sortList99 = function (head) {

}

// @lc code=end

/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = sortList;
// @lcpr-after-debug-end
