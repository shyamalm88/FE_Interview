var sortedListToBST = function (head) {
  return helper(head, null);
};

var helper = function (head, foot) {
  var fast = head;
  var slow = head;
  var node = null;

  if (head === foot) return null;

  while (fast !== foot && fast.next !== foot) {
    fast = fast.next.next;
    slow = slow.next;
  }

  node = new TreeNode(slow.val);
  node.left = helper(head, slow);
  node.right = helper(slow.next, foot);

  return node;
};
