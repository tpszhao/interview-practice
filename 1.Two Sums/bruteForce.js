const sampleArray = [1, 2, 3, 4, 5];
const sampleTarget = 9;

const computeTwoSums = (list, target) => {
  const length = list.length;
  for (let start = 0; start < length; start++) {
    for (let end = start + 1; end < length; end++) {
      if (list[start] + list[end] === target) return [start, end];
    }
  }
  return null;
};
