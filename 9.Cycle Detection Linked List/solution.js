const secondNextNode = (node) => {
  if (node === null) {
    return null;
  }
  if (node.next === null) {
    return null;
  }
  return node.next.next;
};

export const detectCycle = (head) => {
  if (head === null) return null;

  let pointer1 = head.next;
  let pointer2 = secondNextNode(head);
  if (pointer2 === null) return null;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = secondNextNode(pointer2);
    if (pointer2 === null) {
      return null;
    }
  }

  pointer1 = head;
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
};
