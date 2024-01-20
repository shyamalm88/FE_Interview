const removeNthNode = (head, n) => {
  let h = new ListNode(0);
  let fast = h;
  let slow = h;

  h.next = head;

  for (let i = 0; i < n + 1; i++) {
    slow = slow.next;
  }

  while (slow !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = fast.next.next;

  return h.next;
};
