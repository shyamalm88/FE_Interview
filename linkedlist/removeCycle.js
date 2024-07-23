const removeCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      removeCycleNode(head, fast);
    }
  }
};

const removeCycleNode = (head, node) => {
  let pr1 = head;
  let pr2 = node;
  while (pr1 != pr2) {
    pr1 = pr1.next;
    pr2 = pr2.next;
  }
  while (pr1.next != pr2) {
    pr1 = pr1.next;
  }
  pr1.next = null;
};

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(15);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(10);

// Creating a loop for testing
head.next.next.next.next.next = head.next.next;
removeCycle(head);
printList(head);
