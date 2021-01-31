class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseBetween = (head, m, n) => {
  if (m === n) return head;
  let newList = null;

  let lastNodeBeforeReverse = null;
  let lastNodeOfReverse = null;
  let reversedList = null;
  let firstNodeAfterReverse = null;

  let currentNode = head;
  let counter = 1;

  while (currentNode !== null) {
    if (counter < m) {
      lastNodeBeforeReverse = currentNode;
      currentNode = currentNode.next;
    } else if (counter === m) {
      const newParentNode = currentNode.next;
      lastNodeOfReverse = currentNode;
      reversedList = currentNode;
      lastNodeOfReverse.next = null;
      currentNode = newParentNode;
    } else if (counter < n) {
      const newParentNode = currentNode.next;
      currentNode.next = reversedList;
      reversedList = currentNode;
      currentNode = newParentNode;
    } else if (counter === n) {
      firstNodeAfterReverse = currentNode.next;
      currentNode.next = reversedList;
      reversedList = currentNode;
      break;
    }

    counter++;
  }

  if (!!lastNodeBeforeReverse) {
    lastNodeBeforeReverse.next = reversedList;
    newList = head;
  } else {
    newList = reversedList;
  }

  if (!!firstNodeAfterReverse) {
    lastNodeOfReverse.next = firstNodeAfterReverse;
  }

  return newList;
};

const m = 3;
const n = 4;

const values = [1, 2, 3, 4, 5, 6];
const reducer = (prev, curr) => new ListNode(curr, prev);

const head = values.reduce(reducer, null);

const partialReverse = reverseBetween(head, m, n);

// console.log(JSON.stringify(partialReverse));
