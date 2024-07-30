class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function getHeight(node) {
  if (node === null) {
    return 0;
  }
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) {
  if (root === null) {
    return true;
  }
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  const heightDiff = Math.abs(leftHeight - rightHeight);
  if (heightDiff > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}
// Usage example:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
console.log("Is the tree balanced?", isBalanced(tree));
