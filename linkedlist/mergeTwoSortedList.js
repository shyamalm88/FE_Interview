function Node(data, next) {
  this.data = data;
  this.next = next;
}
const mergeTwoSortedList = (list1, list2) => {
  let h = new Node(null, null);
  let prev = h;

  while (list1 != null && list2 != null) {
    if (list1.data < list2.data) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  if (list1 == null) {
    prev.next = list2;
  }

  if (list2 == null) {
    prev.next = list1;
  }

  return h.next;
};
