const binarySearchIndex = (list, target, start, end) => {
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    let value = list[mid];
    if (value === target) {
      return mid;
    }
    if (value < target) {
      return binarySearchIndex(list, target, mid + 1, end);
    }
    return binarySearchIndex(list, target, start, mid - 1);
  }
  return -1;
};

const searchRange = (list, target) => {
  let start = 0;
  let end = list.length;

  let foundIndex = binarySearchIndex(list, target, start, end);

  if (foundIndex === -1) return [-1, -1];

  let result = [foundIndex, foundIndex];
  let startPos = foundIndex;
  let endPos = foundIndex;

  while (startPos !== -1) {
    let index = binarySearchIndex(list, target, start, startPos - 1);
    if (index !== -1) {
      result[0] = index;
    }
    startPos = index;
  }
  while (endPos !== -1) {
    let index = binarySearchIndex(list, target, endPos + 1, end);
    if (index !== -1) {
      result[1] = index;
    }
    endPos = index;
  }

  return result;
};

export default searchRange;
