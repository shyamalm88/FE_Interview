const rightViewOfBinaryTree = (root) => {
  var result = [];
  helper(root, 0, result);
  return result;
};

var helper = function (node, level, result) {
  if (!node) return;
  if (level === result.length) {
    result[level] = node.val;
  }
  helper(node.right, level + 1, result);
  helper(node.left, level + 1, result);
};

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(rightViewOfBinaryTree(root));
