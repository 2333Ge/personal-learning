export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function tranArrayToNodeList(arr = []) {
  if (!arr || !arr.length) return null;
  let head = new ListNode();
  let node = head;
  for (val of arr) {
    node.next = new ListNode(val);
    node = node.next;
  }
  return head.next;
}

