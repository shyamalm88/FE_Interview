const diameterOfBinaryTree = (node) => {
  return findMaxHeight(node, 0);
};

const findMaxHeight = (node, max) => {
  if (node == null) return 0;
  let left = findMaxHeight(node.left, max);
  let right = findMaxHeight(node.right, max);
  max = Math.max(max, left + right);
  return 1 + Math.max(left, right);
};
