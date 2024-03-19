const zigZagTraversal = (node) => {
  if (node == null) {
    return [];
  }
  let flag = 1;
  let q = [node];
  let ans = [node.data];

  while (q.length > 0) {
    let n = q.length;
    for (let i = 0; i < n; i++) {
      if (flag != 0) {
        temp = q.shift();
        if (temp.right) {
          q.push(temp.right);
          ans.push(temp.right.data);
        }
        if (temp.left) {
          q.push(temp.left);
          ans.push(temp.left.data);
        }
      } else if (flag == 0) {
        temp = q.pop();
        if (temp.left) {
          q.unshift(temp.left);
          ans.push(temp.left.data);
        }
        if (temp.right) {
          q.unshift(temp.right);
          ans.push(temp.right.data);
        }
      }
    }
    flag = !flag;
  }
  return ans;
};

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);

console.log(zigZagTraversal(root));
