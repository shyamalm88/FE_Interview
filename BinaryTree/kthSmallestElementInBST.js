var kthSmallest = function (root, k) {
  var queue = [root];
  var num = 0;
  while (queue.length) {
    var node = queue.pop();
    node.right && queue.push(node.right);
    if (node.left) {
      queue.push(new TreeNode(node.val));
      queue.push(node.left);
    } else {
      num++;
      if (num === k) return node.val;
    }
  }
};
