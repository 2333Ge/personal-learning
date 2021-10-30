/**
 * 第一遍没想出来
 */

/**
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。

 

示例 1：


输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：


输入：head = [1,1,1,2,3]
输出：[2,3]
 

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function tranArrayToNodeList(arr = []) {
  if (!arr || !arr.length) return null;
  let head = new ListNode();
  let node = head;
  for (val of arr) {
    node.next = new ListNode(val);
    node = node.next;
  }
  return head.next;
}

/**
 * 参考了：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/shan-chu-pai-xu-lian-biao-zhong-de-zhong-oayn/
 * 注意头部节点会被移除的情况，用一个哑结点指向头结点，最后返回哑结点.next
 * 查到重复元素，从重复元素节点开始删除
 * 
 * 另可看：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/fu-xue-ming-zhu-di-gui-die-dai-yi-pian-t-wy0h/
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let curNode = dummyNode;
  while (curNode.next && curNode.next.next) {
    if (curNode.next.next.val === curNode.next.val) {
      const val = curNode.next.val;
      while (curNode.next && curNode.next.val === val) {
        curNode.next = curNode.next.next;
      }
    } else {
      curNode = curNode.next;
    }
  }
  return dummyNode.next;
};

let head = deleteDuplicates(tranArrayToNodeList([1, 1, 1, 2, 3, 5]));

while (head) {
  console.log(head.val);
  head = head.next;
}
