const maxDepthOfBinaryTree = (root) => {
  if (root == null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }

  let left = maxDepthOfBinaryTree(root.left);
  let right = maxDepthOfBinaryTree(root.right);

  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is : " + maxDepthOfBinaryTree(root));
