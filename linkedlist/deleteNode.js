var deleteNode = function (node) {
  while (node.next.next) {
    node.val = node.next.val;
    node = node.next;
  }
  node.val = node.next.val;
  node.next = null;
};
