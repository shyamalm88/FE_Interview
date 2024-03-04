const colliSionPointLinkedList = (l1, l2) => {
  if (l1 == null || l2 == null) {
    return null;
  }
  let t1 = l1;
  let t2 = l2;

  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;

    if (t1 == t2) return t1;

    if (t1 == null) t1 = l2;
    if (t2 == null) t2 = l1;
  }
  return t1;
};
