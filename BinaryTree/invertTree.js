const invertTree = (root) => {
  if (root) {
    swap(root);
    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};

const swap = (node) => {
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
};
