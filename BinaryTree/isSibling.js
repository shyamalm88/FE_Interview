const isSibling = (node, a, b) => {
  if (node === null) {
    return false;
  }

  if (node.left !== null && node.right !== null) {
    let left = node.left.data;
    let right = node.right.data;
    if (left === a && right === b) {
      return true;
    }
    if (left === b && right === a) {
      return true;
    }
  }
  if (node.left == null) {
    return isSibling(node.right, a, b);
  }

  if (node.right == null) {
    return isSibling(node.left, a, b);
  }

  return true;
};

class Node {
  constructor(data) {
    this.data = data;
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

let data_one = 5;
let data_two = 6;

console.log(isSibling(root, data_one, data_two));
