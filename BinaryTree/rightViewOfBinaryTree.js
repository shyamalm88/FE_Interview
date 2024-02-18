const rightViewOfBinaryTree = (root) => {
  const res = [];
  rightViewUtil(root, res, 0);
  return res;
};

const rightViewUtil = (node, res, level) => {
  if (node == null) {
    return;
  }
  if (level == res.length) {
    res.push(node.val);
  }
  rightViewUtil(node.left, res, level + 1);
  rightViewUtil(node.right, res, level + 1);
};
