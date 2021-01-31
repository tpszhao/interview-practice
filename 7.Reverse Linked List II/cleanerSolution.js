class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// input head=[1,2,3,4,5,6,7], steps=3 1<=steps<= length of head
// output [3,2,1,4,5,6,7]
const reverseSegment = (head, steps) => {
  let reversedList = null;
  let firstNodeAfterReverse = null;
  let lastNodeOfReverse = head;
  let currentNode = head;
  for (let i = 1; i <= steps; i++) {
    const previousNode = currentNode.next;
    if (i === steps) {
      firstNodeAfterReverse = currentNode.next;
    }
    currentNode.next = reversedList;
    reversedList = currentNode;
    currentNode = previousNode;
  }
  lastNodeOfReverse.next = firstNodeAfterReverse;
  return reversedList;
};

const reverseBetween = (head, m, n) => {
  if (m === n) return head;

  let lastNodeBeforeReverse = null;
  let segmentAfterFirstReverse = null;
  let currentNode = head;
  for (let i = 1; i <= m; i++) {
    if (i === m) {
      segmentAfterFirstReverse = reverseSegment(currentNode, n - m + 1);
    } else {
      lastNodeBeforeReverse = currentNode;
      currentNode = currentNode.next;
    }
  }

  if (!lastNodeBeforeReverse) return segmentAfterFirstReverse;

  lastNodeBeforeReverse.next = segmentAfterFirstReverse;

  return head;
};

const values = [1, 2, 3, 4, 5, 6];
const reducer = (prev, curr) => new ListNode(curr, prev);

const head = values.reduce(reducer, null);
const reversedList = reverseBetween(head, 2, 4);
console.log(JSON.stringify(reversedList));
