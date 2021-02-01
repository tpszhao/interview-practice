export const findEnd = (head) => {
  if (head === null) return null;
  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

export const flatten = (head) => {
  if (head === null) return null;
  let currentNode = head;
  let currentChild = currentNode.child;
  let currentNext = currentNode.next;
  const setNextLoop = (newCurrentNode) => {
    currentChild = newCurrentNode.child;
    currentNext = newCurrentNode.next;
  };

  while (currentChild || currentNext) {
    if (!currentChild) {
      currentNode = currentNext;
    } else {
      currentNode.next = currentChild;
      currentNode.child = null;
      let childEnd = findEnd(currentChild);
      childEnd.next = currentNext;
      currentChild.prev = currentNode;
      if (currentNext) {
        currentNext.prev = childEnd;
      }
      currentNode = currentChild;
    }
    setNextLoop(currentNode);
  }
  return head;
};
