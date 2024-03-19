const maxHeightBinaryTree = (node) => {
  if (node == null) return 0;
  let left = maxHeightBinaryTree(node.left) + 1;
  let right = maxHeightBinaryTree(node.right) + 1;
  let ans = Math.max(left, right);
  return ans;
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

console.log("Height of tree is : " + maxHeightBinaryTree(root));
