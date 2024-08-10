// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.

// The right subtree of a node contains only nodes with keys greater than the node's key.

// Both the left and right subtrees must also be binary search trees.

var isValidBST = function (root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

var helper = function (root, min, max) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};
