const twoSum = (list, target) => {
  const length = list.length;
  for (let start = 0; start < length; start++) {
    for (let end = start + 1; end < length; end++) {
      if (list[start] + list[end] === target) return [start, end];
    }
  }
  return null;
};
