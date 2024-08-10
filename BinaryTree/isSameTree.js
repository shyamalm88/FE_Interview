var isSameTree = function (p, q) {
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
  if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return true;
};

var isSameTree = function (p, q) {
  var s1 = [p];
  var s2 = [q];
  var ll = null;
  var rr = null;

  while (s1.length && s2.length) {
    ll = s1.pop();
    rr = s2.pop();

    if (!ll && !rr) continue;
    if (!ll || !rr) return false;
    if (ll.val !== rr.val) return false;

    s1.push(ll.left);
    s1.push(ll.right);
    s2.push(rr.left);
    s2.push(rr.right);
  }

  return true;
};
