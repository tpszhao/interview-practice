class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseBetween = (head, m, n) => {
  if (m === n) return head;

  let pointer = 1;
  let currentNode = head;
  let lastNodeBeforeReverse = null;
  while (pointer < m) {
    lastNodeBeforeReverse = currentNode;
    currentNode = currentNode.next;
    pointer++;
  }

  let tail = currentNode;
  let reversedList = null;
  while (pointer <= n) {
    const previousNode = currentNode.next;
    currentNode.next = reversedList;
    reversedList = currentNode;
    currentNode = previousNode;
    pointer++;
  }

  tail.next = currentNode;
  if (lastNodeBeforeReverse) {
    lastNodeBeforeReverse.next = reversedList;
    return head;
  }
  return reversedList;
};

const values = [1, 2, 3, 4, 5, 6];
const reducer = (prev, curr) => new ListNode(curr, prev);

const head = values.reduce(reducer, null);
const reversedList = reverseBetween(head, 2, 4);
console.log(JSON.stringify(reversedList));
