const rightViewOfBinaryTree = (root) => {
  var result = [];
  helper(root, 0, result);
  return result;
};

var helper = function (node, level, result) {
  if (!node) return;
  result[level] = node.val;
  helper(node.left, level + 1, result);
  helper(node.right, level + 1, result);
};
