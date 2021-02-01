export class ListNode {
  constructor(value = 0, next = null, prev = null, child = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

const convertArrayToList = (arr) => {
  const arrayOfListNode = arr.map((val) => new ListNode(val));
  arrayOfListNode.forEach((element, index) => {
    const next = arrayOfListNode[index + 1] || null;
    const prev = arrayOfListNode[index - 1] || null;
    element.next = next;
    element.prev = prev;
  });
  return arrayOfListNode;
};

const firstLevel = [1, 2, 3, 4, 5, 6];
const secondLevel = [7, 8, 9, 10];
const thirdLevel = [11, 12];

// create a three level doubly linked list where
// head of second list is the child of firstList[pos1]
// head of third list is the child of secondList[pos2]
export const generateThreeLevelList = (pos1 = null, pos2 = null) => {
  const firstLevelList = convertArrayToList(firstLevel);
  const secondLevelList = convertArrayToList(secondLevel);
  const thirdLevelList = convertArrayToList(thirdLevel);
  const firstHead = firstLevelList[0];
  const secondHead = secondLevelList[0];
  const thirdHead = thirdLevelList[0];
  if (pos1 !== null) {
    firstLevelList[pos1].child = secondHead;
  }

  if (pos2 !== null) {
    secondLevelList[pos2].child = thirdHead;
  }
  return firstHead;
};

export const convertListToArray = (head) => {
  let array = [];
  let currentNode = head;
  while (currentNode !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
};
export const convertListToReverseArray = (end) => {
  let array = [];
  let currentNode = end;
  while (currentNode !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.prev;
  }
  return array;
};

export const generateVerticalList = (length) => {
  if (!length) return null;
  let head = new ListNode(1);
  let currentNode = head;
  for (let value = 2; value <= length; value++) {
    let child = new ListNode(value);
    currentNode.child = child;
    currentNode = child;
  }
  return head;
};
