const balancedBinaryTree = (node) => {
  return depth(node, 0) >= 0;
};

const depth = (node, depth) => {
  if (node == null) {
    return depth;
  }
  let left = depth(node.left, depth + 1);
  let right = depth(node.right, depth + 1);
  if (left === -1 || right === -1 || Math.max(abs(left - right)) > 1) return -1;
  return Math.max(left, right) + 1;
};
