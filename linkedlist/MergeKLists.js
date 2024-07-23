/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeKLists = function (lists) {
  var res = null;
  for (var i = 0; i < lists.length; i++) {
    res = merge(res, lists[i]);
  }
  return res;
};

var merge = function (a, b) {
  if (!a) return b;
  if (!b) return a;

  var head = new ListNode(0);
  var now = head;

  while (a || b) {
    if (!a || (b && b.val < a.val)) {
      now.next = b;
      b = b.next;
    } else {
      now.next = a;
      a = a.next;
    }
    now = now.next;
  }

  return head.next;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
