/**
 * 两数相加
 * ing
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */

// 1 硬解
const sum1 = (l1, l2) => {
  const a = parseInt(l1.join(""));
  const b = parseInt(l2.join(""));
  let result = [];
  let temp = a + b;
  if (temp === 0) return [0];
  while (temp !== 0) {
    result.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }
  return result;
};

// 巧解
const sum2 = (l1 = [], l2 = []) => {
  if (!l1.length && !l2.length) return 0;
  return (l1.pop() || 0) + (l2.pop() || 0) + sum2(l1, l2) * 10;
};

console.log("[8,0,7]====>", sum2([2, 4, 3], [5, 6, 4]));
console.log("[2,0]====>", sum2([5], [1, 5]));
console.log("[0]====>", sum2([0], [0]));
console.log(
  // 官方答案错了？
  "[8,9,9,9,0,0,0,1]====>",
  sum2([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])
);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 官方数据结构
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  let node = new ListNode();
  let root = node;
  let ii = 0;
  while (l1 || l2) {
    const sum = l1.val + l2.val + ii;
    node.next = new ListNode(sum % 10);
    node = node.next;
    ii = Math.floor(sum / 10);
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return root.next;
};
