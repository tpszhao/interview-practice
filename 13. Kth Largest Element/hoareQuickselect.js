// note: the sorted is in descending order

const swap = (list, i, j) => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
};

const findPivotIndex = (list, left, right) => {
  const pivotElement = list[right];
  let i = left;
  let j = left;
  while (j <= right) {
    if (list[j] >= pivotElement) {
      swap(list, i, j);
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i - 1;
};

const quickSelect = (list, k, left = 0, right = list.length - 1) => {
  if (left === right) {
    return list[left];
  }

  const pivotIndex = findPivotIndex(list, left, right);
  const searchIndex = k - 1;
  if (pivotIndex === searchIndex) {
    return list[pivotIndex];
  } else if (searchIndex < pivotIndex) {
    return quickSelect(list, k, left, pivotIndex - 1);
  } else {
    return quickSelect(list, k, pivotIndex + 1, right);
  }
};

export default quickSelect;
