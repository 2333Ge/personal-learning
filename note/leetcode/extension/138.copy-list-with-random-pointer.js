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
var copyRandomList = function (head) {
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
