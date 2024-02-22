class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev; // The new head of the reversed linked list
}

// Example usage:
const list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log("Original Linked List:");
console.log(list);

const reversedList = reverseLinkedList(list);

console.log("\nReversed Linked List:");
console.log(reversedList);
