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
