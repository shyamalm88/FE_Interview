const levelOrderTraversal = (node) => {
  if (node == null) {
    return [];
  }
  let q = [node];
  let ans = [];
  while (q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      let peak = q.shift();
      ans.push(peak.val);
      if (peak.left) q.push(peak.left);
      if (peak.right) q.push(peak.right);
    }
  }
  return ans;
};

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.val = data;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);

console.log(levelOrderTraversal(root));
