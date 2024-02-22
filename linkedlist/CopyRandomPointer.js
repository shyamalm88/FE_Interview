/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  var map = new Map();
  var now = null;

  now = head;
  while (now) {
    map.set(now, new RandomListNode(now.label));
    now = now.next;
  }

  now = head;
  while (now) {
    map.get(now).next = map.get(now.next) || null;
    map.get(now).random = map.get(now.random) || null;
    now = now.next;
  }

  return map.get(head);
};
