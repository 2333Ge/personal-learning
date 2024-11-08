/*
 * @lc app=leetcode.cn id=138 lang=javascript
 * @lcpr version=30204
 *
 * [138] 随机链表的复制
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList1 = function (head) {
  if (!head) return null;
  const newHead = new _Node(head.val);
  let cur = head;
  let newCur = newHead;
  const oldNewMap = new Map();
  while (cur) {
    oldNewMap.set(cur, newCur);
    if (cur.next) {
      const newNode = new _Node(cur.next.val);
      newCur.next = newNode;
      newCur = newCur.next;
    }
    cur = cur.next;
  }

  cur = head;
  newCur = newHead;
  while (cur) {
    if (cur.random) {
      newCur.random = oldNewMap.get(cur.random);
    } else {
      newCur.random = null;
    }
    cur = cur.next;
    newCur = newCur.next;
  }

  return newHead;
};
// 太长
var copyRandomList2 = function (head) {
  if (!head) return null;

  let cur = head;
  let newPre = { next: null };
  const oldNewMap = new Map();
  let newDummy = newPre;

  while (cur) {
    const copyNode = new _Node(cur.val);
    newPre.next = copyNode;
    oldNewMap.set(cur, copyNode);
    cur = cur.next;
    newPre = newPre.next;
  }

  cur = head;
  let newCur = newDummy.next;

  while (cur) {
    newCur.random = oldNewMap.get(cur.random);
    cur = cur.next;
    newCur = newCur.next;
  }

  return newDummy.next;
};

var copyRandomList = function (head) {
  if (!head) return null;

  let cur = head;
  let oldNewMap = new Map();

  while (cur) {
    oldNewMap.set(cur, new _Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const newNode = oldNewMap.get(cur);
    newNode.next = oldNewMap.get(cur.next) || null;
    newNode.random = oldNewMap.get(cur.random) || null;
    cur = cur.next;
  }

  return oldNewMap.get(head);
};
// @lc code=end

/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */
