const minDepthBinaryTree = (root) => {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  if (root.left === null) {
    return minDepthBinaryTree(root.right) + 1;
  }
  if (root.right === null) {
    return minDepthBinaryTree(root.left) + 1;
  }
  return (
    Math.min(minDepthBinaryTree(root.left), minDepthBinaryTree(root.right)) + 1
  );
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(
  "The minimum depth of " + "binary tree is : " + minDepthBinaryTree(root)
);
