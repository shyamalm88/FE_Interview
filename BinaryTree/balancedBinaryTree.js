class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
var getHeight = function (root) {
  if (root == null) return 0;
  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);
  if (leftHeight == -1 || rightHeight == -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
};

var isBalanced = function (root) {
  if (root == null) return true;
  if (getHeight(root) == -1) return false;
  return true;
};
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
console.log("Is the tree balanced?", isBalanced(tree));
