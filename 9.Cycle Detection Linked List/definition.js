export class ListNode {
  constructor(value = 0, next = null, prev = null, child = null) {
    this.value = value;
    this.next = next;
  }
}

export const createList = (array, start = null) => {
  const length = array.length;
  if (!length) return null;
  const arrayOfListNode = array.map((val) => new ListNode(val));
  arrayOfListNode.forEach((element, index) => {
    const next = arrayOfListNode[index + 1] || null;
    arrayOfListNode[index].next = next;
  });

  if (length === 1 || start === null) {
    return arrayOfListNode[0];
  }

  arrayOfListNode[length - 1].next = arrayOfListNode[start];

  return arrayOfListNode[0];
};
