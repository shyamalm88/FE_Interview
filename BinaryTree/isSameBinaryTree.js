const isSameBinaryTree = (root1, root2) => {
  if (root1 == null || root2 === null) {
    return root1 === root2;
  }
  return (
    root1.val === root2.val &&
    isSameBinaryTree(root1.left, root2.left) &&
    isSameBinaryTree(root1.right, root2.right)
  );
};

class Node {
  constructor(data) {
    this.val = data;
    this.left = this.right = null;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.left.left.right = new Node(7);

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.right.left = new Node(5);
root1.right.right = new Node(6);
root1.left.left.right = new Node(7);

console.log(isSameBinaryTree(root, root1));
